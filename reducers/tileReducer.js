import { RESET_TILES, SHOW_TILE } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case RESET_TILES:
      return action.payload;
    case SHOW_TILE:
      const nextState = state.slice();
      nextState[action.idx] = action.payload;
      return nextState;
    default:
      return state;
  }
};
