import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  toggleTile,
  loadGrid
} from '../actions/gridActions';
import Body from '../components/Body';
import { getSelected } from '../selectors';

const mapStateToProps = state => ({
  score: state.score,
  grid: state.grid,
  values: getSelected(state)
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleTile,
    loadGrid
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
