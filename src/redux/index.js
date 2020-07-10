import { combineReducers, applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import vehicles from './vehicles';

const reducers = combineReducers({
  vehicles,
});

const middlewares = [reduxPromise];

export const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);
