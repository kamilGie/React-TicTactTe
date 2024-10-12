import Player from "./components/player.jsx";
import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [Players, setPlayers] = useState({
    X: "Player 1 ",
    O: "Player 2 ",
  });

  const [gameTurns, setGameTurns] = useState([]);
  let activePlayer = gameTurns.length % 2 == 1 ? "O" : "X";

  let gameBoard = [...initialGameBoard.map((a) => [...a])];
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

  let draw = null;
  let winner = null;
  for (const comb of WINNING_COMBINATIONS) {
    const firstSqr = gameBoard[comb[0].row][comb[0].column];
    const secSqr = gameBoard[comb[1].row][comb[1].column];
    const thirdSqr = gameBoard[comb[2].row][comb[2].column];

    if (firstSqr && firstSqr === secSqr && secSqr === thirdSqr) {
      winner = Players[firstSqr];
    }
  }

  if (!winner && gameTurns.length === 9) {
    draw = true;
  }

  function HandleRestart() {
    setGameTurns([]);
  }

  function HandlePlayerNameChange(symbol, newName) {
    console.log(symbol, newName);
    setPlayers((prevNames) => {
      return { ...prevNames, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={"player 1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
            NameChange={HandlePlayerNameChange}
          />
          <Player
            name={"player 2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
            NameChange={HandlePlayerNameChange}
          />
        </ol>
        {(winner || draw) && (
          <GameOver winner={winner} restart={HandleRestart} />
        )}
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
