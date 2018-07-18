class Post < ApplicationRecord
  validates :title, :user_id, presence: true


  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User

  has_many :subspost,
    foreign_key: :post_id,
    class_name: :SubsPost,
    inverse_of: :post

  has_many :subs,
    through: :subspost,
    source: :sub

  has_many :comments,
    foreign_key: :post_id,
    class_name: :Comment
end
