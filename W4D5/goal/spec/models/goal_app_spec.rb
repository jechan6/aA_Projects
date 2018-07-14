require 'rails_helper'

RSpec.describe GoalApp, type: :model do
  subject(:user) do
    FactoryBot.build(:user,
      username: "test",
      password: "123456")
  end
  subject(:goals1) do
    FactoryBot.build(:goal_app,
      goal: "Finish these specs",
      user_id: user.id)
  end
  subject(:goals2) do
    FactoryBot.build(:goal_app,
      goal: "Finish these specs too",
      completed?: true,
      user_id: user.id)
  end
  subject(:goals3) do
    FactoryBot.build(:goal_app,
      goal: "Finish these specs three",
      user_id: user.id)
  end


  describe "validations" do
    before { user.save! }
    it {should validate_presence_of(:goal)}
    it {should validate_presence_of(:user_id)}

  end

  describe "find by completed" do
    before { user.save! }
    before { goals1.save! }
    before { goals2.save! }
    before { goals3.save! }
    it "should find correct completed goals"do
      expect(GoalApp.find_by_completed(user)).to eq([goals2])
    end
  end

end
