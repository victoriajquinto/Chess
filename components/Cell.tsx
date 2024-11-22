import { View, StyleSheet} from 'react-native';

//pieces are white/black and have different types
type PieceProps = {
  color: string,
  type: string,
}

export default function Cell({type, team}: PieceProps) {
  return(
    <View style={styles.cellContainer}> </View>
  )
}

const styles = StyleSheet.create({
  cellContainer: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: 'black'
  },
})