# == Schema Information
#
# Table name: responses
#
#  id               :bigint(8)        not null, primary key
#  answer_choice_id :integer          not null
#  user_id          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Response < ApplicationRecord
  validate :respondent_already_answered?
  validate :from_author?
  
  belongs_to :answer_choice,
    primary_key: :id,
    foreign_key: :answer_choice_id,
    class_name: :AnswerChoice
    
  belongs_to :respondent,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
  
  has_one :question,
    through: :answer_choice,
    source: :question
  
  
  def sibling_responses 
    self.question.responses.where.not(id: self.id)
  end 
  
  def respondent_already_answered?
    arr = sibling_responses.where(user_id: self.user_id).pluck(:user_id)
    errors[:response] << 'user already exists' unless arr.empty?
  end
  
  def from_author?
    arr = self.answer_choice.question.poll.user_id != self.user_id
    errors[:response] << 'Author already exists' unless !arr 
  end
end
