// Top-level component - this is what gets rendered when the app is fired up

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './gen/styles/main';

import Instructions from './gen/components/instructions';
import Board from './gen/components/board';

class TicReactToe extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Instructions />
        <Board />
      </View>
    );
  }
}

export default TicReactToe;
