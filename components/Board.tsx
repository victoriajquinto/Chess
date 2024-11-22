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
    row.map((cell, cIndex) => ({
      color: cell[0],
      type: cell[1],
      squareColor: (rIndex + cIndex) % 2 === 0
    }))
  })

  const createCell = (cell: string[]) => {
    return <Cell color={cell[0]} type={cell[1]} squareColor={cell[2]}/>
  }

  return (
    <View>
      <FlatList
        data={flattened}
        numColumns={8}
        renderItem={createCell} //error occuring because there is something wrong with how i'm creating the cell
        extractorKey=
      ></FlatList>
    </View>
  )

}



const styles = StyleSheet.create({
  //create styles for board
})

