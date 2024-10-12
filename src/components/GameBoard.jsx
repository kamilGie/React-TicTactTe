import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function UpdateGameBoard(row, column) {
    setGameBoard((prevGameBoard) => {
      const UpdateBoard = [
        ...prevGameBoard.map((innerArrey) => [...innerArrey]),
      ];
      UpdateBoard[row][column] = "X";
      return UpdateBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, Pindex) => (
              <li key={Pindex}>
                <button onClick={() => UpdateGameBoard(rowIndex, Pindex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
