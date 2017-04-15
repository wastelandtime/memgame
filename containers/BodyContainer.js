import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  loadGrid,
  resetTiles,
  showTile,
  incrementScore,
  selectTile
} from '../actions';
import Body from '../components/Body';
import {
  getSelected,
  showSelected,
  addSelected,
  getTuple,
  lastTwo,
  getMatch
} from '../selectors';

const mapStateToProps = state => ({
  score: state.score,
  grid: state.grid,
  tiles: state.tiles,
  values: getSelected(state),
  totals: showSelected(state),
  sum: addSelected(state),
  tuple: getTuple(state),
  lastTwo: lastTwo(state),
  getMatch: getMatch(state)
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    showTile,
    loadGrid,
    resetTiles,
    incrementScore,
    selectTile
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
