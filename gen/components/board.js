import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/board';

class Board extends React.Component {
  render() {
    return(
      <View style={styles.boardContainer}>
        <Text>Hello board!</Text>
      </View>
    );
  }
}

export default Board;
