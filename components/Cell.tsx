import { View, StyleSheet} from 'react-native';

//pieces are white/black and have different types
type PieceProps = {
  color: string,
  type: string,
  squareColor: string,
}

export default function Cell({color, type, squareColor}: PieceProps) {

  {if (squareColor == 'light') {
    return(
      <View style={styles.lightContainer}>{color} {type}</View>
    )
  } else {
    return (
      <View style={styles.darkContainer}>{color} {type}</View>
    )
  }}

}

const styles = StyleSheet.create({
  lightContainer: {
    width: 44,
    height: 44,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'cream'  //find a hex code later
  },
    darkContainer: {
    width: 44,
    height: 44,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'brown' //find a hex code later
  }
})