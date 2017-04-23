import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import * as globalStyles from '../styles/global';

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.clickTile = this.clickTile.bind(this);
  }

  clickTile() {
    const { sqValue, idx, showTile, lastTwo, values, keepTile } = this.props;
    //selectTile(idx, 1);
    if (lastTwo.length >= 2) {
      console.log(lastTwo[0], values[lastTwo[0]]);
      console.log(lastTwo[1], values[lastTwo[1]]);
      if (values[lastTwo[0]] === values[lastTwo[1]]) {
        console.log('matches');
        keepTile(lastTwo[0], 2);
        keepTile(lastTwo[1], 2);
        console.log(lastTwo.length);
      } else {
        console.log('not matching');
        keepTile(lastTwo[0], 0);
        keepTile(lastTwo[1], 0);
        console.log(lastTwo.length);
      }
    }
    console.log('last', lastTwo);
    showTile(idx, 1);
    console.log('lastafter', lastTwo);
    //console.log(lastTwo);

/*
    if (this.props.tiles[idx] === 0) {
      this.props.showTile(idx, 1);
      console.log(idx, inGrid[idx], this.props.tiles[idx]);
      console.log(this.props.tiles, lastTwo);
    } */
  }
  // get index, update tiles to 1, d
  // problem click 3 razy, 2 tiles are unfolded only™
  clickTile2() {
    // check how many there are in tuple (need another state in score)
    // do counting of scores if match,
    // if match keep'em visible, change color
    // and change status to 2,
    // if not, reset tiles (but ensure that previous matches stay)
    // also track incorrect matches, -score or limited number of moves?
    //
    // Problem: if you there are no matching previously but it falls on 2 and 1
    // then it does not match.
    // Only dispatch actions for tiles that haven't already been clicked.
    //if (this.props.tiles[this.props.idx] === 0) {
      this.props.selectTile(this.props.sqValue, this.props.idx);
      // if the last two tiles match, mark them as solved
      if (this.props.getMatch === 1) {
        this.props.lastTwo.forEach(i => this.props.showTile(i, 2));
      }
      this.props.showTile(this.props.idx, 1);
  }

  render() {
    const { square, textStyle, squareActive } = styles;
    const { sqValue, idx, values, status } = this.props;
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
