import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  boardContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 306,
    width: 306,
  },

  container: {
    marginTop: 30,
  },

  turn: {
    textAlign: 'center'
  },

  lineY1: {
    backgroundColor: 'black',
    height: 306,
    width: 3,
    position: 'absolute',
    transform: [
      { translateX: 100 }
    ]
  },

  lineY2: {
    backgroundColor: 'black',
    height: 306,
    width: 3,
    position: 'absolute',
    transform: [
      { translateX: 200 }
    ]
  },

  lineX1: {
    backgroundColor: 'black',
    height: 3,
    width: 306,
    position: 'absolute',
    transform: [
      { translateY: 100 }
    ]
  },

  lineX2: {
    backgroundColor: 'black',
    height: 3,
    width: 306,
    position: 'absolute',
    transform: [
      { translateY: 200 }
    ]
  }
});

export default styles;
