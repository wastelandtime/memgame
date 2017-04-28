import { RESET_TILES, SHOW_TILE, LOAD_GRID } from '../actions/actionTypes';

const initialState = {
  values: [],
  status: [],
  history: [],
  limbo: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_TILES:
      return { ...state, status: action.payload };
    case LOAD_GRID:
      return { ...state, values: action.payload, limbo: [] };
    case SHOW_TILE:
      const nextState = state.status.slice();
        // Check if a tile is not already selected
        if (nextState[action.idx] === 0) {
          nextState[action.idx] = action.payload;
          if (state.limbo.length <= 1) {
            return {
              ...state,
              limbo: [...state.limbo, action.idx],
              status: nextState,
              history: [...state.history, action.idx]
            };
          }
          console.log('limbo is full');
          const a = state.values[state.limbo[0]];
          const b = state.values[state.limbo[1]];
          if (a === b) {
            nextState[state.limbo[0]] = 2;
            nextState[state.limbo[1]] = 2;
          } else {
            nextState[state.limbo[0]] = 0;
            nextState[state.limbo[1]] = 0;
          }
          return {
            ...state,
            limbo: [action.idx],
            status: nextState,
            history: [...state.history, action.idx]
          };
        }
      return state;
    default:
      return state;
  }
};
