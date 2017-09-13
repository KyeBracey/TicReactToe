// Top-level component - this is what gets rendered when the app is fired up

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Instructions from './gen/components/instructions';

class TicReactToe extends React.Component {
  render() {
    return (
      <View>
        <Instructions />
      </View>
    );
  }
}

export default TicReactToe;
