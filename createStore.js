import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import gridReducer from './reducers/gridReducer';
import scoreReducer from './reducers/scoreReducer';

const logger = createLogger();

export default (initialState = {}) => (
  createStore(
    combineReducers({
      grid: gridReducer,
      score: scoreReducer
    }),
    initialState,
    applyMiddleware(logger)
  )
);
