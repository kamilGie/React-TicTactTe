import { INITIAL_GAME_BOARD } from "../context/AppContext";

export default function SetGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((a) => [...a])];
  for (const turn of gameTurns) {
    gameBoard[turn.square.row][turn.square.col] = turn.Player;
  }
  return gameBoard;
}
