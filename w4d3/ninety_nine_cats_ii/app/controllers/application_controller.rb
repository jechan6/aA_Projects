class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  helper_method :current_user, :login
  # protect_from_forgery with: :exception
  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user

  end 
  
  def current_user 
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end 
  
  def is_logged_in?
    !!current_user
  
  end 
  
  def require_logged_out
    redirect_to cats_url if is_logged_in?
  end 
  
  def require_logged_in 
    redirect_to cats_url unless is_logged_in?
  end 
  
  def cat_owner?
    redirect_to cats_url unless current_user.cats.find_by(id: params[:id]) 
  end
  

end
