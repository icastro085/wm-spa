import { combineReducers, applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import make from './make';
import model from './model';
import version from './version';
import vehicle from './vehicle';

const reducers = combineReducers({
  make,
  model,
  version,
  vehicle,
});

const middlewares = [reduxPromise];

export const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);
