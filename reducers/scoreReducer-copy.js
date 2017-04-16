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
      if (state.selected.length < 1) {
            return { ...state,
              selected: [...state.selected, action.val],
              history: [...state.history, action.idx],
              matched: 0
            };
      } else if (state.selected.length === 1) {
        if (state.selected[0] === action.val) {
          return { ...state,
            matched: 1,
            score: state.score + 1,
            selected: [],
            history: [...state.history, action.idx]
          };
        }
        return { ...state,
          matched: 0,
          score: state.score - 1,
          selected: [],
          history: [...state.history, action.idx]
        };
      }
    default:
      return state;
  }
};
