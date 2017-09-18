import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import styles from '../styles/cell';

class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.onPress(this.props.position);
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={this.onPress}>
        <View>
          <Text style={styles.cell}>
            {this.props.value}
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default Cell;
