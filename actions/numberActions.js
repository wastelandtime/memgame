import {
  SET_SCORE,
  SET_UNCOVERED
} from './actionTypes';

export const setScore = () => {
  return {
    type: SET_SCORE
  };
};

export const setUncovered = (arr) => {
  return {
    type: SET_UNCOVERED,
    payload: arr
  };
};
