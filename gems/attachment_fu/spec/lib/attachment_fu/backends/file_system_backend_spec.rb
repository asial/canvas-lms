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

describe AttachmentFu::Backends::FileSystemBackend do
  subject(:backend) do
    Class.new do
      extend AttachmentFu::Backends::FileSystemBackend
    end
  end

  # Browsers occasionally submit a filename that is not valid UTF-8 (e.g. a
  # Shift_JIS or Latin-1 name passed through unconverted). The regexp match in
  # sanitize_filename raises ArgumentError on those, which surfaces as a 500
  # on the upload endpoint.
  let(:invalid_utf8_filename) { "caf\xE9 report.pdf" }

  it "does not raise on a filename with invalid UTF-8 byte sequences" do
    expect { backend.sanitize_filename(invalid_utf8_filename) }.not_to raise_error
  end

  it "returns a valid UTF-8 filename when given invalid byte sequences" do
    expect(backend.sanitize_filename(invalid_utf8_filename)).to be_valid_encoding
  end

  it "still replaces slashes and spaces" do
    expect(backend.sanitize_filename("a b/c.txt")).to eq "a_b_c.txt"
  end

  it "leaves a valid multibyte filename intact" do
    expect(backend.sanitize_filename("レポート.pdf")).to eq "レポート.pdf"
  end
end
