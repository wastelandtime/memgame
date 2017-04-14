import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import TestSquare from './TestSquare';
import * as globalStyles from '../styles/global';

export default class TestGrid extends Component {
  render() {
    const mygrid = [];
    this.props.inGrid.forEach((r, i) => {
      mygrid.push(
        <TestSquare
          key={i}
          sqValue={r}
          setNumber={this.props.setNumber}
        />
      );
    });
    const { grid } = styles;
    return (
      <View style={grid}>
        {mygrid}
      </View>
    );
  }

}

TestGrid.propTypes = {
  inGrid: PropTypes.array
};

const styles = StyleSheet.create({
  grid: {
    backgroundColor: globalStyles.BG_COLOR,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});
