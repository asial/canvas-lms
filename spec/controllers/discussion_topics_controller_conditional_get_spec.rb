# frozen_string_literal: true

#
# Copyright (C) 2026 - present Instructure, Inc.
#
# This file is part of Canvas.
#
# Canvas is free software: you can redistribute it and/or modify it under
# the terms of the GNU Affero General Public License as published by the Free
# Software Foundation, version 3 of the License.
#
# Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
# WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
# A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
# details.
#
# You should have received a copy of the GNU Affero General Public License along
# with this program. If not, see <http://www.gnu.org/licenses/>.
#

require_relative "../spec_helper"

# Covers the conditional-GET short-circuit added to
# DiscussionTopicsController#index (format.json). The contract: return 304 when
# nothing that affects the serialized body changed, and 200 (fresh) whenever it
# did -- including per-user read/unread state, which is the correctness-critical
# part. Also verifies the deliberate bail-out for timed-visibility content.
describe DiscussionTopicsController do
  describe "GET 'index' conditional GET (format: :json)" do
    before :once do
      course_with_teacher(active_all: true)
      student_in_course(active_all: true, course: @course)
      @topic = @course.discussion_topics.create!(title: "topic 1", message: "hello", user: @teacher)
    end

    before do
      user_session(@student)
    end

    def get_index(if_none_match: nil, params: {})
      request.headers["If-None-Match"] = if_none_match if if_none_match
      get :index, params: { course_id: @course.id }.merge(params), format: :json
    end

    def etag_after_fetch(params: {})
      get_index(params:)
      expect(response).to have_http_status(:ok)
      etag = response.headers["ETag"]
      expect(etag).to be_present
      etag
    end

    it "sets an ETag and returns 200 on the first fetch" do
      get_index
      expect(response).to have_http_status(:ok)
      expect(response.headers["ETag"]).to be_present
    end

    it "returns 304 when nothing changed" do
      etag = etag_after_fetch
      get_index(if_none_match: etag)
      expect(response).to have_http_status(:not_modified)
      expect(response.body).to be_blank
    end

    it "returns 200 when a topic's content changes" do
      etag = etag_after_fetch
      @topic.update!(message: "edited")
      get_index(if_none_match: etag)
      expect(response).to have_http_status(:ok)
    end

    it "returns 200 when a new topic is added to the course" do
      etag = etag_after_fetch
      @course.discussion_topics.create!(title: "topic 2", message: "second", user: @teacher)
      get_index(if_none_match: etag)
      expect(response).to have_http_status(:ok)
    end

    # Correctness-critical: per-user read state must never be served stale.
    it "returns 200 after the requesting user reads the topic" do
      etag = etag_after_fetch
      @topic.change_read_state("read", @student)
      get_index(if_none_match: etag)
      expect(response).to have_http_status(:ok)
    end

    # Correctness-critical: a new reply changes unread_count without touching the
    # topic row, so a topic-only etag would go stale here.
    it "returns 200 when a new reply changes unread_count" do
      etag = etag_after_fetch
      @topic.discussion_entries.create!(message: "a reply", user: @teacher)
      get_index(if_none_match: etag)
      expect(response).to have_http_status(:ok)
    end

    it "returns 200 when a graded topic's assignment dates change" do
      assignment = @course.assignments.create!(title: "graded", points_possible: 10, submission_types: "discussion_topic")
      graded_topic = assignment.discussion_topic || @course.discussion_topics.create!(title: "graded topic", message: "m", user: @teacher, assignment:)
      graded_topic # ensure created
      etag = etag_after_fetch
      assignment.update!(due_at: 3.days.from_now)
      get_index(if_none_match: etag)
      expect(response).to have_http_status(:ok)
    end

    # Deliberate bail-out: a future delayed_post_at can surface a topic that isn't
    # even in the current page, so the endpoint must never 304 while one is pending.
    it "never returns 304 while a timed-visibility topic is pending in the course" do
      @course.discussion_topics.create!(
        title: "future announcement",
        message: "later",
        user: @teacher,
        delayed_post_at: 1.day.from_now,
        workflow_state: "post_delayed"
      )
      etag = etag_after_fetch
      get_index(if_none_match: etag)
      expect(response).to have_http_status(:ok)
    end

    it "still short-circuits (304) for the announcements widget shape when unchanged" do
      @course.announcements.create!(title: "announce", message: "hi", user: @teacher)
      etag = etag_after_fetch(params: { only_announcements: true, per_page: 40 })
      get_index(if_none_match: etag, params: { only_announcements: true, per_page: 40 })
      expect(response).to have_http_status(:not_modified)
    end
  end
end
