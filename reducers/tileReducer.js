import { RESET_TILES, SHOW_TILE } from '../actions/actionTypes';

const initialState = {
  grid: [],
  status: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_TILES:
      return { ...state, grid: action.payload };
    case SHOW_TILE:
      const nextState = state.slice();
      nextState[action.idx] = action.payload;
      return nextState;
    default:
      return state;
  }
};
