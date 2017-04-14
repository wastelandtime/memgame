import {
  RESET_TILES, TOGGLE_TILE
} from './actionTypes';
import { initialTileStatus } from '../utils/TestGenerators';


export const resetTiles = (n) => {
  return {
    type: RESET_TILES,
    payload: initialTileStatus(n)
  };
};

export const toggleTile = (idx) => {
  return {
    type: TOGGLE_TILE,
    idx
  };
};
