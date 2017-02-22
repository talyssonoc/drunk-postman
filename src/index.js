import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import config from './config';
import reducer from './reducer';
import Game from './components/Game';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Game {...config}/>
  </Provider>,
  document.querySelector('[data-app]')
);

