import React from 'react';
import { Text, ListView, View } from 'react-native';
import styles from '../styles/board';

class Board extends React.Component {
  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['0', '1', '2', '3', '4', '5', '6', '7', '8']),
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.boardContainer}
          dataSource={this.state.dataSource}
          renderRow={(data) => <Text style={styles.boxText}>{data}</Text>}
        />
        <View style={styles.lineY1} />
        <View style={styles.lineY2} />
        <View style={styles.lineX1} />
        <View style={styles.lineX2} />
      </View>
    );
  }
}

export default Board;
