/*
 * Copyright (C) 2015 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import getDroppableDashboardCardBox from './react/getDroppableDashboardCardBox'
import DashboardCard from './react/DashboardCard'
import axios from '@canvas/axios'
import {showFlashAlert} from '@canvas/alerts/react/FlashAlert'
import {asJson, checkStatus, getPrefetchedXHR} from '@canvas/util/xhr'
import {getCachedCards as getCardsFromCache, setCachedCards} from './dashboardCardCache'
import {useScope as createI18nScope} from '@canvas/i18n'
import type {Card} from './types'

const I18n = createI18nScope('load_card_dashboard')

export function createDashboardCards(
  dashboardCards: Card[],
  cardComponent = DashboardCard,
  extraProps: any,
) {
  const Box = getDroppableDashboardCardBox()

  // Decide which dashboard to show based on role
  const isTeacher = dashboardCards.some((card: Card) => card.enrollmentType === 'TeacherEnrollment')

  return (
    <Box
      showSplitDashboardView={isTeacher}
      courseCards={dashboardCards}
      hideColorOverlays={window.ENV?.PREFERENCES?.hide_dashcard_color_overlays}
      cardComponent={cardComponent}
      {...extraProps}
    />
  )
}
export class CardDashboardLoader {
  static observedUsersDashboardCards: Record<string, Card[]> = {}

  errorShown = false

  observedUserId?: string = undefined

  promiseToGetDashboardCards?: Promise<Card[]> = undefined

  renderIntoDOM = (dashboardCards: Card[]) => {
    const dashboardContainer = document.getElementById('DashboardCard_Container')

    ReactDOM.render(
      createDashboardCards(dashboardCards, DashboardCard, {observedUserId: this.observedUserId}),
      dashboardContainer,
    )
  }

  async loadCardDashboard(
    renderFn = this.renderIntoDOM,
    observedUserId: string,
    preloadedCards?: Card[] | null,
  ) {
    if (observedUserId) {
      this.observedUserId = observedUserId
    }

    if (window?.ENV?.FEATURES?.dashboard_graphql_integration && preloadedCards) {
      try {
        renderFn(preloadedCards)
      } catch (e) {
        this.showError(e as Error)
      }
    } else if (observedUserId && CardDashboardLoader.observedUsersDashboardCards[observedUserId]) {
      // @ts-expect-error
      renderFn(CardDashboardLoader.observedUsersDashboardCards[observedUserId], true)
    } else if (this.promiseToGetDashboardCards) {
      this.promiseToGetDashboardCards
        .then(cards => {
          // @ts-expect-error
          renderFn(cards, true)
        })
        .catch(e => {
          this.showError(e)
        })
    } else {
      let xhrHasReturned = false
      let cacheTimeout: number
      const observeePart = observedUserId ? `_observee_${observedUserId}` : '_self'
      const cacheKey = `dashcards_for_user_${ENV && ENV.current_user_id}${observeePart}`
      const legacyKey = `dashcards_for_user_${ENV && ENV.current_user_id}`
      const CACHE_TTL = 7 * 24 * 60 * 60 * 1000 // 7 days - long cache for instant display
      const getCachedCards = () => getCardsFromCache(ENV && ENV.current_user_id, observedUserId, CACHE_TTL)

      const urlPrefix = '/api/v1/dashboard/dashboard_cards'
      const url = new URL(urlPrefix, window.location.origin)
      if (observedUserId) {
        url.searchParams.append('observed_user_id', observedUserId)
      }
      const urlString = url.toString()
      const prefetchedXHR = asJson(getPrefetchedXHR(urlString))
      const cachedData = getCachedCards()

      // If cache exists, show immediately and fetch in background
      if (cachedData) {
        // Render cached data immediately (no waiting)
        renderFn(cachedData, false)
        xhrHasReturned = false

        // Fetch fresh data in background with longer jitter (3s)
        // User already sees content, so no UX impact from delay
        // Spreads load better across 3 seconds instead of 1 second
        const jitter = Math.random() * 3000
        this.promiseToGetDashboardCards = new Promise(resolve => {
          setTimeout(() => {
            const request = prefetchedXHR || axios.get(urlString).then(checkStatus).then(({data}) => data)
            resolve(request)
          }, jitter)
        }).catch(e => {
          this.showError(e)
        })
      } else if (!prefetchedXHR) {
        // No cache, no prefetch - use shorter jitter (1s) to balance UX and load distribution
        // User is waiting for initial display
        const jitter = Math.random() * 1000

        this.promiseToGetDashboardCards = new Promise(resolve => {
          setTimeout(() => {
            resolve(
              axios
                .get(urlString)
                // @ts-expect-error
                .then(checkStatus)
                // @ts-expect-error
                .then(({data}) => data)
            )
          }, jitter)
        }).catch(e => {
          this.showError(e)
        })
      } else {
        // Use prefetched XHR
        this.promiseToGetDashboardCards = prefetchedXHR.catch(e => {
          this.showError(e)
        })
      }
      this.promiseToGetDashboardCards
        .then(() => (xhrHasReturned = true))
        .catch(e => {
          this.showError(e)
        })

      // If cache was displayed immediately, wait for background fetch to update
      if (cachedData) {
        this.promiseToGetDashboardCards
          .then((cards: Card[]) => {
            // Update with fresh data from background fetch
            // @ts-expect-error
            renderFn(cards, true)
          })
          .catch(e => {
            this.showError(e)
          })
      } else {
        // No cache - use Promise.race to show data as soon as possible
        // Because we use prefetch_xhr to prefetch this xhr request from our rails erb, there is a
        // chance that the XHR to get the latest dashcard data has already come back before we get
        // to this point. So if the XHR is ready, there's no need to render twice, just render
        // once with the newest data.
        const promiseToGetCardsFromCache = new Promise(resolve => {
          cacheTimeout = setTimeout(() => {
            const cachedCards = getCachedCards()
            if (cachedCards) resolve(cachedCards)
          }, 1) as unknown as number
        })
        Promise.race([this.promiseToGetDashboardCards, promiseToGetCardsFromCache])
          .then(dashboardCards => {
            clearTimeout(cacheTimeout)
            // calling the renderFn with `false` indicates to consumers that we're still waiting
            // on the follow-up xhr request to complete.
            // @ts-expect-error
            renderFn(dashboardCards, xhrHasReturned)
            // calling it with `true` indicates that all outstanding card promises have settled.
            if (!xhrHasReturned && this.promiseToGetDashboardCards)
              // @ts-expect-error
              return this.promiseToGetDashboardCards.then((cards: Card[]) => renderFn(cards, true))
          })
          .catch(e => {
            this.showError(e)
          })
      }

      // Cache the fetched dashcards in localStorage with TTL so we can render instantly next
      // time they come to their dashboard (while still fetching the most current data)
      // Also save the observed user's cards if observing so observer can switch between students
      // without any delay
      this.promiseToGetDashboardCards
        .then((dashboardCards: Card[]) => {
          setCachedCards(ENV && ENV.current_user_id, observedUserId, dashboardCards)
          if (observedUserId) {
            CardDashboardLoader.observedUsersDashboardCards[observedUserId] = dashboardCards
          }
        })
        .catch((e: Error) => {
          this.showError(e)
        })
    }
  }

  showError(e: Error) {
    if (!this.errorShown) {
      this.errorShown = true
      showFlashAlert({message: I18n.t('Failed loading course cards'), err: e, type: 'error'})
    }
  }
}

// Clears the cache for use in test suites
export function resetCardCache() {
  CardDashboardLoader.observedUsersDashboardCards = {}
}
