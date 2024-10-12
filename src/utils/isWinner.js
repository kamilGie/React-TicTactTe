import { WINNING_COMBINATIONS } from "../context/AppContext";

export default function isWinner(gameBoard) {
  for (const comb of WINNING_COMBINATIONS) {
    const firstSqr = gameBoard[comb[0].row][comb[0].column];
    const secSqr = gameBoard[comb[1].row][comb[1].column];
    const thirdSqr = gameBoard[comb[2].row][comb[2].column];

    if (firstSqr && firstSqr === secSqr && secSqr === thirdSqr) {
      return true;
    }
  }
  return null;
}
