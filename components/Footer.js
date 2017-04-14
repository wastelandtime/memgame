import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as globalStyles from '../styles/global';

const Footer = ({ children }) => (
  <View style={styles.footer}>
    <Text style={globalStyles.COMMON_STYLES.text}>
      {children}
    </Text>
  </View>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: globalStyles.BAR_COLOR
  }
});
export default Footer;
