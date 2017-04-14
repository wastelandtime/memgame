import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Grid from './Grid';
import * as globalStyles from '../styles/global';


export default class Body extends Component {

  componentWillMount() {
    this.refresh();
  }
  resetTiles() {
    this.props.resetTiles(36);
  }
  refresh() {
    this.props.loadGrid(5);
    this.resetTiles();
  }

  render() {
    if (this.props.values === 3) {
      this.resetTiles();
    }
    return (
      <View style={styles.body}>
        <Grid
          inGrid={this.props.grid}
          toggleTile={this.props.toggleTile}
          tiles={this.props.tiles}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.refresh.bind(this)}
            title={'Regenerate the Grid'}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.resetTiles.bind(this)}
            title={'Reset Tiles'}
          />
        </View>
        <View style={styles.dashboard}>
          <Text>Score (totals): {this.props.totals}</Text>
          <Text>Uncovered (values): {this.props.values}</Text>
          <Text>Total (sum): {this.props.sum}</Text>
          <Text>Tuple: {this.props.tuple}</Text>
        </View>
      </View>
    );
  }

}

Body.propTypes = {

};

const styles = StyleSheet.create({
  body: {
    flex: 8,
    backgroundColor: globalStyles.BG_COLOR
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  dashboard: {
    backgroundColor: globalStyles.BAR_COLOR,
    marginLeft: 90,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 100
  }
});
