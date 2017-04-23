import { createSelector } from 'reselect';

const getValues = (state) => state.tiles.values;
const getStatus = (state) => state.tiles.status;
const getHistory = (state) => state.tiles.history;

// Gets the last two indices
export const getLastTwo = createSelector(
  [getHistory],
  history => history.slice(-2)
);

/*
// counts selected tiles
export const getSelected = createSelector(
  [getTiles],
  tiles => tiles.reduce((acc, elem) => acc + elem, 0)
);

// displays only values of selected tiles, for the rest it shows 0
export const showSelected = createSelector(
  [getTiles, getValues],
  (tiles, grid) => tiles.map((idx, i) => (idx === 1 ? grid[i] : 0))
);

export const addSelected = createSelector(
  [showSelected],
  count => count.reduce((acc, elem) => acc + elem, 0)
);

export const getTuple = createSelector(
  [showSelected],
  tile => tile.filter(num => num > 0)
);

// See if it was matched
export const lastTwo = createSelector(
  [getHistory],
  history => history.slice(-2)
);

export const getMatch = createSelector(
  [getMatched, lastTwo],
  match => match
);

*/
