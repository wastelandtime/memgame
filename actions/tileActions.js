import {
  RESET_TILES, SHOW_TILE
} from './actionTypes';
import { initialTileStatus } from '../utils/TestGenerators';


export const resetTiles = (n) => {
  return {
    type: RESET_TILES,
    payload: initialTileStatus(n)
  };
};

export const showTile = (idx, n) => {
  return {
    type: SHOW_TILE,
    idx,
    payload: n
  };
};
