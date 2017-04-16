import {
  INCREMENT_SCORE, SELECT_TILE
} from '../actions/actionTypes';

const initialState = {
  selected: [],
  history: [],
  matched: 0,
  score: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_SCORE:
      return { ...state, score: state.score + action.payload };
    case SELECT_TILE:
      return { ...state,
        history: [...state.history, action.idx]
      };
    default:
      return state;
  }
};
