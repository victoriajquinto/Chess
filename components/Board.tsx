import { FlatList, View, StyleSheet } from 'react-native';

import Cell from '@/components/Cell';

type BoardProps = {
  boardState: string[][][]
}

export default function Board({ boardState }: BoardProps) {

  //iterate through the board and create cells

  //flatten board
  const flattened = boardState.flatMap((row, rIndex) => {
    //map through the row, referencing cell and column index
      //define key
      //define color
      //define type
      //define board's square color
  } )

  const createCell = (cell: string[]) => {
    return <Cell color={cell[0]} type={cell[1]} squareColor={}/>
  }

  return (
    <View>
      <FlatList
        data={flattened}
        numColumns={8}
        renderItem={createCell}
        extractorKey=
      >

      </FlatList>

    </View>
  )

}



const styles = StyleSheet.create({
  //create styles for board
})

