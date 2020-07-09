import React from 'react';
import { render } from 'react-dom';

import App from './App';

import './scss/index.scss';

const container = document.querySelector('#app');

render(<App />, container);
