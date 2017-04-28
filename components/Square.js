import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import * as globalStyles from '../styles/global';

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.clickTile = this.clickTile.bind(this);
  }

  clickTile() {
    const { idx, showTile } = this.props;
    showTile(idx, 1);
  }

  render() {
    const { square, textStyle } = styles;
    const { sqValue, idx, status } = this.props;
    return (
      <TouchableHighlight
        style={[square, tileColour(status[idx])]}
        onPress={this.clickTile}
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

const tileColour = (status) => {
    switch (status) {
      case 0:
        return { backgroundColor: globalStyles.ACCENT_COLORS[1] };
      case 1:
        return { backgroundColor: globalStyles.OL };
      case 2:
        return { backgroundColor: globalStyles.GL };
      default:
        return { backgroundColor: globalStyles.ACCENT_COLORS[1] };
    }
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: globalStyles.NU,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
  color: globalStyles.ACCENT_COLORS[0]
  }
});
