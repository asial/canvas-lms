/*
 * Copyright (C) 2024 - present Instructure, Inc.
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

import type {TeacherAssignmentType} from '../graphql/AssignmentTeacherTypes'

export function mockCourse(overrides = {}) {
  return {
    lid: 'course-lid',
    assignmentGroupsConnection: {
      pageInfo: mockPageInfo(),
      nodes: [],
    },
    modulesConnection: {
      pageInfo: mockPageInfo(),
      nodes: [],
    },
    ...overrides,
  }
}

export function mockPageInfo(overrides = {}) {
  return {
    startCursor: 'startCursor',
    endCursor: 'endCursor',
    hasNextPage: false,
    hasPreviousPage: false,
    ...overrides,
  }
}

export function mockAssignment(overrides = {}): TeacherAssignmentType {
  return {
    __typename: 'Assignment',
    id: 'assignment-gid',
    gid: 'assignment-gid',
    lid: 'assignment-lid',
    name: 'Basic Mock Assignment',
    pointsPossible: 5,
    dueAt: '2018-11-28T13:00-05:00',
    lockAt: '2018-11-29T13:00-05:00',
    unlockAt: '2018-11-27T13:00-05:00',
    description: 'assignment description',
    state: 'published',
    needsGradingCount: 0,
    course: mockCourse(),
    modules: [
      {lid: '1', name: 'module 1'},
      {lid: '2', name: 'module 2'},
    ],
    assignmentGroup: {lid: '1', name: 'assignment group'},
    lockInfo: {
      isLocked: false,
    },
    submissionTypes: ['online_text_entry'],
    allowedExtensions: [],
    allowedAttempts: undefined,
    anonymizeStudents: false,
    onlyVisibleToOverrides: false,
    assignmentOverrides: {
      pageInfo: mockPageInfo(),
      nodes: [],
    },
    submissions: {
      pageInfo: mockPageInfo(),
      nodes: [],
    },
    ...overrides,
  }
}
