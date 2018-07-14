require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
  scenario 'has a new user page' do
    visit new_user_url
    expect(page).to have_content "New User"
  end

  feature 'signing up a user' do
    background :each do
      visit new_user_url
      fill_in 'username', :with => "test"
      fill_in 'password', :with => "123456"
      click_on "Create User"
    end

    scenario 'shows username on the homepage after signup' do
      expect(page).to have_content("test")
    end

  end
end

feature 'logging in' do
  background :each do
    user = User.create(username: "test", password: "123456")
    visit new_session_url
    fill_in 'username', :with => "test"
    fill_in 'password', :with => "123456"
    click_on "Log In"
  end
  scenario 'shows username on the homepage after login' do
    expect(page).to have_content("test")
  end

end

feature 'logging out' do
  background :each do
    user = User.create(username: "test", password: "123456")
    visit new_session_url
    fill_in 'username', :with => "test"
    fill_in 'password', :with => "123456"
    click_on "Log In"
  end
  scenario 'begins with a logged in state' do
    expect(page).to have_content("Log Out")
  end

  scenario 'doesn\'t show username on the homepage after logout' do
      # save_and_open_page
    click_on "Log Out"
    expect(page).not_to have_content("test")
  end

end
