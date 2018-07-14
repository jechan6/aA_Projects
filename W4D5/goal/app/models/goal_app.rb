class GoalApp < ApplicationRecord
  validates :goal, :user_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  def self.find_by_completed(user)
    user.goals.where(completed?: true)
  end
end
