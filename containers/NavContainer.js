import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { listNumbers, pickNumber } from '../actions/numberActions';

import Nav from '../components/Nav';

const mapStateToProps = state => ({
  numbers: state.numbers
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    listNumbers,
    pickNumber
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
