import {
  SET_SCORE,
  SET_UNCOVERED
} from '../actions/actionTypes';

const initialState = {
  uncovered: 0,
  matched: 0,
  score: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return { ...state, matched: 4 };
    case SET_UNCOVERED:
      let uncovered = 0;
      action.payload.map(i => {
        if (i[1] === 1) {
          uncovered += 1;
        }
      });
      return uncovered;
    default:
      return state;
  }
};
