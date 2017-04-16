import {
  INCREMENT_SCORE, SELECT_TILE
} from './actionTypes';


export const incrementScore = (n) => {
  return {
    type: INCREMENT_SCORE,
    payload: n
  };
};

export const selectTile = (idx) => {
  return {
    type: SELECT_TILE,
    idx
  };
};
