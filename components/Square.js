import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import * as globalStyles from '../styles/global';

export default class Square extends Component {

  myaction() {
    this.props.toggleTile(this.props.idx);
  }

  render() {
    const { square, textStyle, squareActive } = styles;
    const { sqValue, idx, tiles } = this.props;
    return (
      <TouchableHighlight
        style={[square, tiles[idx] && squareActive]}
        onPress={this.myaction.bind(this)}
      >
        <View>
          <Text style={textStyle}>{sqValue}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

Square.propTypes = {
  sqValue: PropTypes.number,
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
