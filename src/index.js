import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './scss/index.scss';

import { store } from './redux';
import App from './App';

const container = document.querySelector('#app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  container,
);
