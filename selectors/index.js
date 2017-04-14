import { createSelector } from 'reselect';

const getValues = (state) => state.grid;

export const getSelected = createSelector(
  [getValues],
  //grid => grid.map(ele => ele[1])
  grid => grid.reduce((acc, ele) => acc + ele[1], 0)
);

/*
export const getSelected = createSelector(
  [getDisplayed],
  uncovered => uncovered
);

*/
