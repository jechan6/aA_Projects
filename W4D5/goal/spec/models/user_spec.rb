require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do
    FactoryBot.build(:user,
      username: "test",
      password: "123456")
    end
    describe "validations" do
      it {should validate_presence_of(:username)}
      it {should validate_presence_of(:password_digest)}
      it {should validate_presence_of(:password)}
      it {should validate_presence_of(:session_token)}
    end
    describe "find_by_credentials" do
      before { user.save! }
      it "should find correct users" do
        expect(User.find_by_credentials("test", "123456")).to eq(user)
      end

      it "should return nil if user not found" do
        expect(User.find_by_credentials("t123est", "123456")).to be_nil
        expect(User.find_by_credentials("test", "12345612122")).to be_nil

      end
    end

  end
