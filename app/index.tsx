import { Text, SafeAreaView, StyleSheet } from "react-native";
import { useState, useEffect } from 'react';

import Board from "@/components/Board"

export default function Index() {

  const [boardState , setBoardState] = useState<string[][][] | undefined>(undefined)

  //on initialization, create initial board state
  useEffect(() => {
    const newBoard = initializeBoard();
    setBoardState(newBoard);
  }, []);

  return (
    <SafeAreaView style={styles.pageContainer}>
      {/* <Board boardState={boardState} style={styles.boardContainer}/> */}
    </SafeAreaView>
  );
}

  //helper function to create initial board state.
const initializeBoard = (): string[][][] => {
  return [
    [["b", "Rook", ""], ["b", "Knight", ""], ["b", "Bishop", ""], ["b", "Queen", ""], ["b", "King", ""], ["b", "Bishop", ""], ["b", "Knight", ""], ["b", "Rook", ""]],
    [["b", "Pawn", ""], ["b", "Pawn", ""], ["b", "Pawn", ""], ["b", "Pawn", ""], ["b", "Pawn", ""], ["b", "Pawn", ""], ["b", "Pawn", ""], ["b", "Pawn", ""]],
    [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]],
    [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]],
    [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]],
    [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]],
    [["w", "Pawn", ""], ["w", "Pawn", ""], ["w", "Pawn", ""], ["w", "Pawn", ""], ["w", "Pawn", ""], ["w", "Pawn", ""], ["w", "Pawn", ""], ["w", "Pawn", ""]],
    [["w", "Rook", ""], ["w", "Knight", ""], ["w", "Bishop", ""], ["w", "King", ""], ["w", "Queen", ""], ["w", "Bishop", ""], ["w", "Knight", ""], ["w", "Rook", ""]],
  ];
};

const styles = StyleSheet.create({
  pageContainer: {
    width: 400,
    height: 400,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 4
  }
})
