class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create

    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save!
      redirect_to api_pokemon_url(@pokemon)
    end
  end

  private
  def pokemon_params
    params.require(:pokemon).permit(:name, :image_url, :poke_type, :attack, :defense, moves: [], item_ids: [])
  end
end
