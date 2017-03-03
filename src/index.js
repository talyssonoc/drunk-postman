import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reduceReducers from 'reduce-reducers';

import config from './config';
import { Game, gameReducer } from './game';
import { moveReducer } from './pad';
// import { stageReducer } from './stages';

const reducer = reduceReducers(
  gameReducer,
  moveReducer,
  // stageReducer
);

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Game {...config} />
  </Provider>,
  document.querySelector('[data-app]')
);

