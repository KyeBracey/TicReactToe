import React from 'react';
import { View, Text } from 'react-native';

class Instructions extends React.Component {
  render() {
    return (
      <View>
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
