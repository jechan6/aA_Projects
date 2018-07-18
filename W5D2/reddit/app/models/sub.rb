class Sub < ApplicationRecord
  validates :title, :description, :moderator_id, presence: true

  belongs_to :moderator,
    foreign_key: :moderator_id,
    class_name: :User
    
  has_many :subspost,
    foreign_key: :sub_id,
    class_name: :SubsPost,
    inverse_of: :sub

  has_many :posts,
    through: :subspost,
    source: :post
end
