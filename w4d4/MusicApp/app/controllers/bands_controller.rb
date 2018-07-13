class BandsController < ApplicationController
  before_action :require_logged_in, except: [:index]
  def index
    @bands = Band.all
    render :index
  end 
  
  def create 
    @bands = Band.new(band_params)
    if @bands.save 
      redirect_to bands_url
    else 
      render :index
    end 
  end 
  
  def new 
    @bands = Band.new
    render :new
  end 
  
  def edit 
    @bands = Band.find_by(id: params[:id])
    render :edit
  end 
  
  def show
    @bands = Band.find(params[:id])
    render :show
  end   
  
  def update
    @bands = Band.find_by(id: params[:id])
    if @bands.update_attributes(band_params)
      redirect_to band_url(@bands)
    else 
      flash.now[:errors] = @bands.errors.full_messages
      redirect_to :edit 
    end
  end 
  
  def destroy
    @bands = Band.find_by(id: params[:id])
    
    if @bands.destroy
      redirect_to bands_url
    else 
      flash.now[:errors] = @bands.errors.full_messages
      redirect_to bands_url
    end 
  end
  
  private 
  def band_params 
    params.require(:band).permit(:name)
  end 
end
