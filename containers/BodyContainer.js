import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadGrid } from '../actions/gridActions';
import { resetTiles, toggleTile } from '../actions/tileActions';
import Body from '../components/Body';
import { getSelected } from '../selectors';

const mapStateToProps = state => ({
  score: state.score,
  grid: state.grid,
  tiles: state.tiles,
  values: getSelected(state)
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
