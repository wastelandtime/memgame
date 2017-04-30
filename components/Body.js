import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Grid from './Grid';
import * as globalStyles from '../styles/global';


export default class Body extends Component {
  constructor(props) {
    super(props);
    //Bind functions
    this.refresh = this.refresh.bind(this);
    this.resetTiles = this.resetTiles.bind(this);
  }

  componentWillMount() {
    this.refresh();
  }

  // Cover all tiles
  resetTiles() {
    this.props.resetTiles(36);
  }

  // Regenerate the grid and cover all tiles
  refresh() {
    this.props.loadGrid(5);
    this.resetTiles();
  }

  render() {
    return (
      <View style={styles.body}>
        <Grid
          values={this.props.values}
          status={this.props.status}
          history={this.props.history}
          showTile={this.props.showTile}
          limbo={this.props.limbo}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.refresh}
            title={'Regenerate the Grid'}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.resetTiles}
            title={'Reset Tiles'}
          />
        </View>
        <View style={styles.dashboard}>
          <Text>{this.props.countdown}</Text>
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
