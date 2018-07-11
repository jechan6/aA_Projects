class CatRentalRequestsController < ApplicationController
  def new
    @cat_rental = CatRentalRequest.new
    @cats = CatRentalRequest.all
    render :new
  end
  
  def create
    @cat_rental = CatRentalRequest.new(cat_rental_params)
    if @cat_rental.save 
      redirect_to cat_url(@cat_rental.cat_id)
    else 
      render :new
    end 
  end
  
  def approve!
    @cat = CatRentalRequest.find(params[:cat_id])
    @cat.approve!
    redirect_to cat_url(@cat.cat_id)
  end 
  def deny!
    @cat = CatRentalRequest.find(params[:cat_id])
    @cat.deny!
    redirect_to cat_url(@cat.cat_id)
  end 
  private 
  
  def cat_rental_params
    
    params.require(:cat_rental).permit(:cat_id, :start_date, :end_date)
  end 
end