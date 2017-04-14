import { createSelector } from 'reselect';

const getValues = (state) => state.grid;
const getTiles = (state) => state.tiles;

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
