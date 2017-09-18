import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import styles from '../styles/cell';

class Cell extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    this.state = {
      value: this.props.value,
      position: this.props.position
    }
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    console.log(`Cell ${this.state.position} pressed`);
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={this.onPress}>
        <View>
          <Text style={styles.cell}>
            {this.state.value}
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default Cell;
