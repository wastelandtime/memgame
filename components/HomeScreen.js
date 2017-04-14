import React from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import BodyContainer from '../containers/BodyContainer';
import Footer from './Footer';

const HomeScreen = () => (
  <View style={{ flex: 1 }}>
    <Header title={'MyTitle'}>
      <Text>Component</Text>
    </Header>
    <BodyContainer />
    <Footer>
      <Text>my footer</Text>
    </Footer>
  </View>
);

export default HomeScreen;
