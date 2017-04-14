import { createSelector } from 'reselect';

const getValues = (state) => state.grid;

export const getSelected = createSelector(
  [getValues],
  grid => grid[1]
);

/*
export const getSelected = createSelector(
  [getDisplayed],
  uncovered => uncovered
);

*/
