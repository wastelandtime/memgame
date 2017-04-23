import { RESET_TILES, SHOW_TILE, LOAD_GRID, KEEP_TILE } from '../actions/actionTypes';

const initialState = {
  values: [],
  status: [],
  history: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_TILES:
      return { ...state, status: action.payload };
    case LOAD_GRID:
      return { ...state, values: action.payload };
    case SHOW_TILE:
      const nextState = state.status.slice();
      nextState[action.idx] = action.payload;
      return { ...state, status: nextState, history: [...state.history, action.idx] };
    case KEEP_TILE:
      const newState = state.status.slice();
      newState[action.idx] = action.payload;
      return { ...state, status: newState };
    default:
      return state;
  }
};
