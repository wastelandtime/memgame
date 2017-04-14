import React, { PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as globalStyles from '../styles/global';


const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.function
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: globalStyles.BG_COLOR,
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default Button;
