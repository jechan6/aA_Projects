class CatsController < ApplicationController
  before_action :require_logged_in, except: [:index]
  before_action :cat_owner?, except: [:index, :show]
  def index
    @cats = Cat.all
    render :index
  end

  def show
    @cat = Cat.find(params[:id])
    render :show
  end

  def new
    @cat = Cat.new
    render :new
  end

  def create

    @cat = Cat.new(cat_params) 
    @cat.user_id = current_user.id if @cat
    if @cat.save
      redirect_to cat_url(@cat)
    else
      flash.now[:errors] = @cat.errors.full_messages
      render :new
    end
  end

  def edit
    @cat = current_user.cats.find_by(id: params[:id]) 
    if @cat
      render :edit
    else
      redirect_to cats_url
    end
  end

  def update
    @cat = Cat.find_by(user_id: current_user.id)
    if @cat.update_attributes(cat_params)
      redirect_to cat_url(@cat)
    else
      flash.now[:errors] = @cat.errors.full_messages
      render :edit
    end
  end
  


  private

  def cat_params
    params.require(:cat).permit(:age, :birth_date, :color, :description, :name, :sex)
  end
end
