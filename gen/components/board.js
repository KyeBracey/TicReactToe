import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/board.js';

class Board extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Hello board!</Text>
      </View>
    );
  }
}

export default Board;
