import React from 'react';
import {Route, Link } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';
class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);

  }
  componentWillReceiveProps(newProps) {
    let oldId = this.props.match.params.pokemonId;
    let newId = newProps.match.params.pokemonId;
    if(oldId != newId){
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }

  }
  render() {
    const {pokemon, items} = this.props;

    if(pokemon === undefined) {
      return(<h1>LOADING...</h1>);
    } else {
      return(
        <div className="details">
          <div key={pokemon.id}>
            <h1 >{pokemon.name}</h1>
            <h1>{pokemon.poke_type}</h1>
            <img src ={pokemon.image_url} height="100px" width="100px"></img>
          </div>
          <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
          {Object.values(items).map((item) => {
            let itemUrl = `/pokemon/${pokemon.id}/item/${item.id}`;
            return (<Link to={itemUrl}><img src={item.image_url}></img></Link>);
          })}
        </div>
      );
    }
  }
}

export default PokemonDetail;
