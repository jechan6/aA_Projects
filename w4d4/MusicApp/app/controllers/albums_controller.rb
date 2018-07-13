class AlbumsController < ApplicationController
  
  def new 
    @albums = Album.new
    @band_id = params[:band_id]
  
    render :new
  end 
  
  
  
  def create 
    @albums = Album.new(album_params)
    
    @albums.band_id = params[:album][:band_id]

    if @albums.save 
      redirect_to album_url(@albums)
    else 
      flash.now[:errors] = ["Invalid arguments"]
      redirect_to new_band_album_url(@albums.band_id)
    end
  end 
  
  def edit 
    @albums = Album.find_by(id: params[:id])
    if @albums 
      render :edit 
    else 
      flash.now[:errors] = ["Invalid album"]
      redirect_to bands_url
    end 
  end 
  
  def show 
    @albums = Album.find_by(id: params[:id])
    render :show
  end 
  
  def update
    @albums = Album.find_by(id: params[:id])
    if @albums.update_attributes(album_params)
      redirect_to album_url(@albums)
    else 
      flash.now[:errors] = ["Invalid arguments"]
      render :edit
    end 
  end
  
  def destroy
    @albums = Album.find_by(id: params[:id])
    if @albums.destroy
      redirect_to bands_url
    else 
      flash.now[:errors] = ["Invalid delete"]
      redirect_to bands_url
    end 
  end
  
  private 
  def album_params
    params.require(:album).permit(:title, :year, :livealbum?)
  end 

end
