class ShortenedUrl < ApplicationRecord
  validates :short_url, :long_url, :user_id, presence:true
  validates :short_url, uniqueness:true

  def self.shortened_url(user, long_url)
    code = self.random_code
    ShortenedUrl.create(user_id: user.id, long_url: long_url, short_url: code)
  end

  def self.random_code

    code = SecureRandom.base64(16)
    until ShortenedUrl.exists?(code)
      code = SecureRandom.base64(16)
    end
    code
  end

end
