import { FlatList, View, StyleSheet } from 'react-native';

import Cell from '@/components/Cell';

type BoardProps = {
  BoardState: string[][][]
}

export default function Board({ boardState }: BoardProps) {

  return(
    <View>
      <FlatList>
          {/* { Create 8 x 8 board} by rendering cells for each item in BoardState */}
      </FlatList>
    </View>
  )

}

