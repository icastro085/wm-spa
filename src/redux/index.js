import { combineReducers, applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import make from './make';
import model from './model';
import vehicle from './vehicle';

const reducers = combineReducers({
  make,
  model,
  vehicle,
});

const middlewares = [reduxPromise];

export const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);
