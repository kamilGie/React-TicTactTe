import Player from "./components/player.jsx";
import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  let activePlayer = gameTurns.length % 2 == 1 ? "O" : "X";

  let gameBoard = initialGameBoard;
  for (const turn of gameTurns) {
    gameBoard[turn.square.row][turn.square.col] = turn.Player;
  }

  function handleSelectedSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      return [
        { square: { row: rowIndex, col: colIndex }, Player: activePlayer },
        ...prevTurns,
      ];
    });
  }
  let winner = null;
  for (const comb of WINNING_COMBINATIONS) {
    const firstSqr = gameBoard[comb[0].row][comb[0].column];
    const secSqr = gameBoard[comb[1].row][comb[1].column];
    const thirdSqr = gameBoard[comb[2].row][comb[2].column];

    if (firstSqr && firstSqr === secSqr && secSqr === thirdSqr) {
      winner = firstSqr;
    }
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={"player 1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
          />
          <Player
            name={"player 2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
          />
        </ol>
        {winner && <p>you win {winner}</p>}
        <GameBoard
          gameBoard={gameBoard}
          OnSelectedSquere={handleSelectedSquare}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
