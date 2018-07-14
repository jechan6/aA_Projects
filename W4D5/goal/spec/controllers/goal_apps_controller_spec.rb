require 'rails_helper'

RSpec.describe GoalAppsController, type: :controller do
  describe "Get #new" do
    it "renders new template" do
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe "POST #create" do
    it "should post with valid entry" do
      post :create, params: { goal_apps: {goal: "GOlasdfklwekaf", user_id: 1} }
      goal = GoalApp.find_by(goal: "GOlasdfklwekaf")
      expect(response).to redirect_to(goal_app_url(goal))
    end

    it "should not post with invalid entry" do
      post :create, params: { goal_apps: {goal: "GOlasdfklwekaf"} }
      expect(response).to render_template(:new)
      expect(flash[:errors]).to be_present
    end
  end

  describe "PATCH #update"  do
    it "should update with valid entry" do
      patch :update, params: { goal_apps: {goal: "New Goals", user_id: 1} }
      goal = GoalApp.find_by(goal: "New Goals")
      expect(response).to redirect_to(goal_app_url(goal))
    end

    it "should not update with invalid entry" do
      patch :update, params: { goal_apps: {goal: "New Goals"} }
      expect(response).to render_template(:edit)
      expect(flash[:errors]).to be_present
    end
  end

  describe "GET #edit" do
    it "renders edit template" do
      get :edit
      expect(response).to render_template(:edit)
    end

    it "should prefill current goal values" do
      goal = GoalApp.create(goal: "Wrong Goal", user_d:1)
      expect(page).to have_content("Wrong Goal")
    end
  end

  describe "DELETE #destroy" do
    it "should delete the goals" do
      goal = GoalApp.create(goal: "Delete Goal", user_d:1)
      delete :destroy, params: { goal }
      goal2 = GoalApp.find_by(goal: "Delete Goal")
      expect(goal2).to be_nil
      expect(response).to redirect_to(user_url(1))
    end
  end
end
