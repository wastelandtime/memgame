import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  loadGrid,
  resetTiles,
  showTile,
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
