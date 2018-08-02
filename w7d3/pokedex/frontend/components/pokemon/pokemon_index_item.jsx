import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({pokemon}) =>{
  const pokemonUrl = "/pokemon/" + pokemon.id;

  return(<li>
    <Link to={pokemonUrl}>{pokemon.name}</Link>
    <img src ={pokemon.image_url} height="100px" width="100px"></img>
  </li>);
};
