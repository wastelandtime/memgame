import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './Square';
import * as globalStyles from '../styles/global';

export default class Grid extends Component {
  render() {
    const mygrid = [];
    this.props.inGrid.forEach((r, i) => {
      mygrid.push(
        <Square
          key={i}
          idx={i}
          sqValue={r}
          toggleTile={this.props.toggleTile}
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

Grid.propTypes = {
  showTile: PropTypes.func
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
