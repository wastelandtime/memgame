import { RESET_TILES, TOGGLE_TILE } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case RESET_TILES:
      return action.payload;
    case TOGGLE_TILE:
      const nextValue = state[action.idx] === 0 ? 1 : 0;
      const nextState = state.slice();
      nextState[action.idx] = nextValue;
      return nextState;
    default:
      return state;
  }
};
