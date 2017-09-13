import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/instructions.js';

class Instructions extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Tap a section of the grid to take your turn
        </Text>
        <Text>
          Make a vertical, horizontal or diagonal line of 3 to win!
        </Text>
        <Text>
          [player]s turn
        </Text>
      </View>
    )
  }
}

export default Instructions
