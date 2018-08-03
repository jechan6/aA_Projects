import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item';
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';
import PokemonFormContainer from './pokemon_form_container';
class PokemonIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const {pokemon} = this.props;

    return (
      <div>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>
        <Route exact path="/" component={PokemonFormContainer}/>
        {pokemon.map(poke => (
          <PokemonIndexItem key={poke.id} pokemon={poke} />
        ))}
      </div>
    );
  }


}
export default PokemonIndex;
