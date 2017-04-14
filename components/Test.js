import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import TestGrid from './TestGrid';
import * as globalStyles from '../styles/global';


export default class Test extends Component {

  componentWillMount() {
    this.refresh();
  }

  refresh() {
    this.props.listNumbers();
  }

  _turnEven() {
    this.props.turnEven();
  }
  _turnOdd() {
    this.props.turnOdd();
  }
  addNest() {
    this.props.addNest(3);
  }
  render() {
    return (
      <View style={styles.body}>
      <TestGrid
        inGrid={this.props.numbers}
        setNumber={this.props.setNumber}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={this.refresh.bind(this)}
          title={'Regenerate the Grid'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={this._turnEven.bind(this)}
          title={'Turn Even'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={this._turnOdd.bind(this)}
          title={'Turn Odd'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={this.addNest.bind(this)}
          title={'AddNest'}
        />
      </View>
      </View>
    );
  }

}

Test.propTypes = {
  numbers: PropTypes.array
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
