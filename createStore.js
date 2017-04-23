import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import tileReducer from './reducers/tileReducer';

const logger = createLogger();

export default (initialState = {}) => (
  createStore(
    combineReducers({
      tiles: tileReducer
    }),
    initialState,
    applyMiddleware(logger)
  )
);
