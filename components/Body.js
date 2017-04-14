import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Grid from './Grid';
import * as globalStyles from '../styles/global';


export default class Body extends Component {

  componentWillMount() {
    this.refresh();
  }

  refresh() {
    this.props.loadGrid(5);
    this.props.resetTiles(36);
  }

  render() {
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
        <Text>{this.props.values}</Text>
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
  }
});
