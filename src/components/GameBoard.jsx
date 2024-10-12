const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ OnSelectedSquere, turns }) {
  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    gameBoard[turn.square.row][turn.square.col] = turn.Player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, Pindex) => (
              <li key={Pindex}>
                <button onClick={() => OnSelectedSquere(rowIndex, Pindex)}>
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
