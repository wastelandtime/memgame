import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  loadGrid,
  resetTiles,
  showTile
} from '../actions';
import Body from '../components/Body';
import {
  getLastTwo
} from '../selectors';

const mapStateToProps = state => ({
  values: state.tiles.values,
  status: state.tiles.status,
  history: state.tiles.history,
  limbo: state.tiles.limbo,
  lastTwo: getLastTwo(state) // Selector
  /* values: getSelected(state),
  totals: showSelected(state),
  sum: addSelected(state),
  tuple: getTuple(state),
  lastTwo: lastTwo(state),
  getMatch: getMatch(state) */
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    showTile,
    loadGrid,
    resetTiles
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
