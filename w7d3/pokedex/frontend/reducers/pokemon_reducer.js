import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON  } from '../actions/pokemon_actions';
import merge from "lodash/merge";
const pokemonReducer = (state = {}, action) => {

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({},state,action.pokemon);
    case RECEIVE_POKEMON:
      return merge({},state,{[action.payload.pokemon.id]: action.payload.pokemon});
    default:
      return state;
  }
};
export default pokemonReducer;
