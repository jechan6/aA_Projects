import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route } from 'react-router-dom';
const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <div>Hello, world!
        <ul>
          <Route path="/" component={PokemonIndexContainer} />
        </ul>
      </div>
    </HashRouter>
  </Provider>
);

export default Root;
