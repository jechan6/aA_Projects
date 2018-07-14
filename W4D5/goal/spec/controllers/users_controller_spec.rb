require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "Get #new" do
    it "rendersnew temlate" do
      get :new
      expect(response).to render_template(:new)
    end
  end
  describe "POST #create" do
    it "should post with valid entry" do
      post :create, params: { user: {username: "test123" , password: "123456" } }
      user = User.find_by(username: "test123")
      expect(session[:session_token]).to eq(user.session_token)
      expect(response).to redirect_to(user_url(user))
    end

    it "should not post with invalid entry" do
      post :create, params: { user: {username: "test123"} }
      expect(response).to render_template(:new)
      expect(flash[:errors]).to be_present
    end
  end

end
