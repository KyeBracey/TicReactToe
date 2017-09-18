import React from 'react';
import { ListView, Text, TouchableNativeFeedback, View } from 'react-native';
import styles from '../styles/board';

import Cell from './cell';

const PLAYERS = ['X', 'O'];

class Board extends React.Component {
  constructor() {
    super()
    this.state = {
      boardCells: Array(9).fill(null),
      turn: 'X',
    };
    this.updateCell = this.updateCell.bind(this);
  }

  updateCell(position) {
    const boardCells = this.state.boardCells;
    boardCells[position] = this.state.turn;
    console.log(`${this.state.turn} played cell ${position}`);
    const nextTurn = PLAYERS.filter((player) => { return player != this.state.turn; })
    console.log(`Next turn: ${nextTurn}`);
    this.setState({ boardCells: boardCells, turn: nextTurn});
  }

  render() {
    const boardCells = this.state.boardCells.map((cell, index) => {
      return [index, cell];
    })
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(boardCells)

    return(
      <View>
        <Text style={styles.turn}>
          {this.state.turn} - your turn!
        </Text>
        <View style={styles.container}>
          <ListView
            contentContainerStyle={styles.boardContainer}
            dataSource={dataSource}
            renderRow={(data) =>
              <Cell
                onPress={this.updateCell}
                position={data[0]}
                value={data[1]}
              />
            }
          />
          <View style={styles.lineY1} />
          <View style={styles.lineY2} />
          <View style={styles.lineX1} />
          <View style={styles.lineX2} />
        </View>
      </View>
    );
  }
}

export default Board;
