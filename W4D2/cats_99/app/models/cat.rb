class Cat < ApplicationRecord
  COLOR = %w(yellow red blue green black white)
  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :color, inclusion: { in: COLOR, message: "%(value) is not a valid color" }
  
  has_many :cat_rental_requests,
  foreign_key: :cat_id,
  class_name: :CatRentalRequest,
  dependent: :destroy
  
  def self.get_color 
    COLOR 
  end 
  
  def age 
    now = Time.now.utc.to_date
    dob = self.birth_date
    now.year - dob.year - ((now.month > dob.month || (now.month == dob.month && now.day >= dob.day)) ? 0 : 1)
  end 
end 