FactoryBot.define do
  factory :goal_app do
    goal "MyString"
    completed? false
    user_id 1
    public? false
  end
end
