import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon, requestSinglePokemon,requestAllPokemon} from './actions/pokemon_actions';
import {fetchAllPokemon, fetchPokemon} from './util/api_util';
import configureStore from './store/store';
import values from 'lodash/values';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';


document.addEventListener('DOMContentLoaded', () => {
  window.fetchPokemon = fetchPokemon;
  const rootEl = document.getElementById('root');
  const store = configureStore();

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
