import { RESET_TILES, SHOW_TILE, LOAD_GRID } from './actionTypes';
import { fillGrid, initialTileStatus } from '../utils/TestGenerators';

export const loadGrid = (n) => {
  return {
    type: LOAD_GRID,
    payload: fillGrid(n)
  };
};

export const resetTiles = (n) => {
  return {
    type: RESET_TILES,
    payload: initialTileStatus(n)
  };
};

// showTile and selectTile need to be merged
export const showTile = (idx, payload) => {
  return {
    type: SHOW_TILE,
    idx,
    payload
  };
};
