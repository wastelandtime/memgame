import React, { Component, PropTypes } from 'react';
import connect from 'react-redux';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { showTile, hideTile } from '../actions/gridActions';
import * as globalStyles from '../styles/global';


export class Square extends Component {
  componentWillMount() {
    console.log(this.showTile);
  }
  render() {
    const { square, textStyle, squareActive } = styles;
    const { sqValue } = this.props;
    return (
      <TouchableHighlight
        style={[square, sqValue[1] && squareActive]}
        onPress={() => console.log(sqValue[0])}
      >
        <View>
          <Text style={textStyle}>{sqValue[0]},{sqValue[1]}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

Square.propTypes = {
  sqValue: PropTypes.array
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: globalStyles.ACCENT_COLORS[0],
    width: 50,
    height: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: globalStyles.ACCENT_COLORS[1],
    alignItems: 'center',
    justifyContent: 'center'
  },
  squareActive: {
    backgroundColor: globalStyles.TEXT_COLOR
  },
  textStyle: {
    //textAlign: 'center',
  }
});

export default connect(null, { showTile, hideTile })(Square);
