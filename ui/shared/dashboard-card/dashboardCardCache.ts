/* Dashboard Card Cache Utilities
 * - Centralizes key generation, load/save, and clearing logic for dashboard cards.
 * - Helps minimize churn across upstream updates by isolating storage behavior.
 */

import type {Card} from './types'

const PREFIX = 'dashcards_for_user_'
const DEFAULT_TTL_MS = 7 * 24 * 60 * 60 * 1000 // 7 days

export function makeCacheKey(userId: string | number | null | undefined, observedUserId?: string) {
  const observeePart = observedUserId ? `_observee_${observedUserId}` : '_self'
  return `${PREFIX}${userId ?? 'unknown'}${observeePart}`
}

export function getCachedCards(
  userId: string | number | null | undefined,
  observedUserId?: string,
  ttlMs: number = DEFAULT_TTL_MS,
): Card[] | null {
  // セキュリティガード: userIdが無効な場合はキャッシュを使わない
  // (複数ユーザーが同じキャッシュキーを共有するのを防ぐ)
  if (!userId) return null

  const key = makeCacheKey(userId, observedUserId)
  const legacyKey = `${PREFIX}${userId}`

  try {
    // Try localStorage (new format)
    const cached = localStorage.getItem(key)
    if (cached) {
      const parsed = JSON.parse(cached)
      const {data, timestamp} = parsed || {}
      const age = Date.now() - (timestamp || 0)
      if (Array.isArray(data) && age < ttlMs) return data
      localStorage.removeItem(key)
    }

    // Legacy fallbacks
    const legacySessionSameKey = sessionStorage.getItem(key)
    if (legacySessionSameKey) {
      const parsedLegacy = JSON.parse(legacySessionSameKey)
      if (Array.isArray(parsedLegacy)) return parsedLegacy as Card[]
    }

    const legacyLocal = localStorage.getItem(legacyKey)
    if (legacyLocal) {
      const parsedLegacyLocal = JSON.parse(legacyLocal)
      if (Array.isArray(parsedLegacyLocal)) return parsedLegacyLocal as Card[]
    }

    const legacySession = sessionStorage.getItem(legacyKey)
    if (legacySession) {
      const parsedLegacy2 = JSON.parse(legacySession)
      if (Array.isArray(parsedLegacy2)) return parsedLegacy2 as Card[]
    }
  } catch (_e) {
    // ignore parse/storage errors
  }
  return null
}

export function setCachedCards(
  userId: string | number | null | undefined,
  observedUserId: string | undefined,
  cards: Card[],
  timestamp: number = Date.now(),
) {
  // セキュリティガード: userIdが無効な場合はキャッシュしない
  if (!userId) return

  try {
    const key = makeCacheKey(userId, observedUserId)
    localStorage.setItem(key, JSON.stringify({data: cards, timestamp}))
  } catch (_e) {
    // ignore storage errors (private mode, quota)
  }
}

export function clearAllDashboardCardCache() {
  const keys: string[] = []
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (k && k.startsWith(PREFIX)) keys.push(k)
    }
  } catch (_e) {}
  try {
    keys.forEach(k => localStorage.removeItem(k))
  } catch (_e) {}

  const sKeys: string[] = []
  try {
    for (let i = 0; i < sessionStorage.length; i++) {
      const k = sessionStorage.key(i)
      if (k && k.startsWith(PREFIX)) sKeys.push(k)
    }
  } catch (_e) {}
  try {
    sKeys.forEach(k => sessionStorage.removeItem(k))
  } catch (_e) {}
}
