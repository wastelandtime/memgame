import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import * as globalStyles from '../styles/global';

export default class Square extends Component {

  myaction() {
    this.props.toggleTile(this.props.idx);
    console.log(this.props.idx);
  }

  render() {
    const { square, textStyle, squareActive } = styles;
    const { sqValue } = this.props;
    return (
      <TouchableHighlight
        style={[square, sqValue[1] && squareActive]}
        onPress={this.myaction.bind(this)}
      >
        <View>
          <Text style={textStyle}>{sqValue[0]}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

Square.propTypes = {
  sqValue: PropTypes.array,
  showTile: PropTypes.func
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
  color: globalStyles.ACCENT_COLORS[0]
  }
});
