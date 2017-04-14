import {
  POPULATE_ROW,
  POPULATE_GRID,
  LOAD_GRID,
  TOGGLE_TILE,
  HIDE_TILE
} from './actionTypes';
import { randNumbers, randGrid, fillGrid } from '../utils/TestGenerators';

export const populateRow = (n) => {
  return {
    type: POPULATE_ROW,
    payload: randNumbers(n)
  };
};

export const populateGrid = () => {
  return {
    type: POPULATE_GRID,
    payload: randGrid()
  };
};

export const loadGrid = (n) => {
  return {
    type: LOAD_GRID,
    payload: fillGrid(n)
  };
};

export const toggleTile = (idx) => {
  return {
    type: TOGGLE_TILE,
    idx
  };
};

export const hideTile = (num) => {
  return {
    type: HIDE_TILE,
    payload: num
  };
};
