import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as globalStyles from '../styles/global';

const Header = ({ children, title }) => (
  <View style={styles.header}>
    <Text style={globalStyles.COMMON_STYLES.text}>
      {children}
      {title}
      {title}
    </Text>
  </View>
);

Header.propTypes = {
  children: PropTypes.node
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: globalStyles.BAR_COLOR
  }
});
export default Header;
