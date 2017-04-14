import { LOAD_GRID } from '../actions/actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_GRID:
      return action.payload;
    default:
      return state;
  }
};
