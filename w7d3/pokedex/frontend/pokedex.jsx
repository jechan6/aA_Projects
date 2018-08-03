import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon, requestSinglePokemon,requestAllPokemon} from './actions/pokemon_actions';
import {fetchAllPokemon, fetchPokemon, createPokemon} from './util/api_util';
import configureStore from './store/store';
import values from 'lodash/values';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';


document.addEventListener('DOMContentLoaded', () => {
  window.fetchPokemon = fetchPokemon;
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.createPokemon = createPokemon;
  const pokemon = {
    name: "Garbomon",
    type: "dragon",
    image_url: "https://thumbs.dreamstime.com/b/face-expression-man-surprised-male-emotions-handsome-cartoon-character-vector-illustration-isolated-white-background-95582074.jpg",
    attack: 10,
    defense: 0,
    moves: ["laugh", "play-dead"],
    item_ids: [1,2,3,4,5]
  };
  window.pokemon = pokemon;


  ReactDOM.render(<Root store={store}/>, rootEl);
});
// window.receiveAllPokemon = receiveAllPokemon;
// window.fetchAllPokemon = fetchAllPokemon;
// window.requestSinglePokemon = requestSinglePokemon;
// window.requestAllPokemon = requestAllPokemon;
// window.store = store;
// window.getState = store.getState;
// window.dispatch = store.dispatch;
// window.selectAllPokemon = selectAllPokemon;
// window.values = values;
