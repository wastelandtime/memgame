import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  listNumbers,
  pickNumber,
  setNumber,
  turnEven,
  turnOdd,
  addNest
} from '../actions/numberActions';
import Test from '../components/Test';

const mapStateToProps = state => ({
  numbers: state.numbers
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    listNumbers,
    pickNumber,
    setNumber,
    turnEven,
    turnOdd,
    addNest
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
