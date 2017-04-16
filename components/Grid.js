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
          showTile={this.props.showTile}
          selectTile={this.props.selectTile}
          keepTile={this.props.keepTile}
          tiles={this.props.tiles}
          inGrid={this.props.inGrid}
          lastTwo={this.props.lastTwo}
          getMatch={this.props.getMatch}
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


const styles = StyleSheet.create({
  grid: {
    backgroundColor: globalStyles.BG_COLOR,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});
