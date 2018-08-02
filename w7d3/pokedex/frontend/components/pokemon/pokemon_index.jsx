import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPokemon();

  }

  render(){
    const {pokemon} = this.props;

    return (
      pokemon.map(pokemon => (
        <li>{pokemon.name}
          <img src ={pokemon.image_url} height="100px" width="100px"></img>
        </li>
      ))
    );
  }


}
export default PokemonIndex;
