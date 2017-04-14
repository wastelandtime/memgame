import {
  LOAD_GRID
} from './actionTypes';
import { fillGrid } from '../utils/TestGenerators';

export const loadGrid = (n) => {
  return {
    type: LOAD_GRID,
    payload: fillGrid(n)
  };
};
