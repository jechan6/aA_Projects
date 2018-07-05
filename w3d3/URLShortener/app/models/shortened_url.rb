class ShortenedUrl < ApplicationRecord
  validates :short_url, :long_url, :user_id, presence:true
  validates :short_url, uniqueness:true

  belongs_to :submitter,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  # has_many :visitors,
  #   primary_key: :id,
  #   foreign_key: :url_id,
  #   class_name: :Visit

  has_many :visitors,
    primary_key: :id,
    foreign_key: :url_id,
    class_name: 'Visit'

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

  def num_clicks
    self.visitors.length
  end

  def num_uniques
    ShortenedUrl.select(:user_id).distinct.count
  end

  # def num_recent_uniques
  #   ShortenedUrl.select(:user_id).distinct.where()
  # end

end
