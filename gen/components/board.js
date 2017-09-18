import React from 'react';
import { ListView, Text, TouchableNativeFeedback, View } from 'react-native';
import styles from '../styles/board';

import Cell from './cell';

class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      boardCells: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    };
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const boardCells = this.state.boardCells.map((cell, index) => {
      return [index, cell];
    })
    const dataSource = ds.cloneWithRows(boardCells)
    console.log(boardCells);

    return(
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.boardContainer}
          dataSource={dataSource}
          renderRow={(data) =>
            <Cell position={data[0]} value={data[1]} />
          }
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
