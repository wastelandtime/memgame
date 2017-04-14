import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadGrid, resetTiles, toggleTile } from '../actions';
import Body from '../components/Body';
import { getSelected, showSelected, addSelected, getTuple } from '../selectors';

const mapStateToProps = state => ({
  score: state.score,
  grid: state.grid,
  tiles: state.tiles,
  values: getSelected(state),
  totals: showSelected(state),
  sum: addSelected(state),
  tuple: getTuple(state)
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleTile,
    loadGrid,
    resetTiles
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
