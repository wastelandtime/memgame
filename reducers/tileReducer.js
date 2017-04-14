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

/*
case TOGGLE_TILE:
      const nextValue = state[action.idx].slice(); // Make a copy of the tuple to be toggled
      nextValue[1] = nextValue[1] === 0 ? 1 : 0;   // Toggle it
      const nextState = state.slice();             // Make a copy of the state
      nextState[action.idx] = nextValue;           // Replace the old tuple with the toggled copy
      return nextState; */
