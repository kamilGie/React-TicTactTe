import { useState } from "react";
import Player from "./components/player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/log.jsx";
import SetGameBoard from "./utils/SetGameBoard.js";
import isWinner from "./utils/isWinner.js";
import GameOver from "./components/GameOver.jsx";
import { PLAYERS } from "./context/AppContext.js";

function App() {
  const [Players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const gameBoard = SetGameBoard(gameTurns);
  const activePlayer = gameTurns.length % 2 ? "O" : "X";
  const winner = isWinner(gameBoard) && Players[gameTurns.length % 2 ? "X" : "O"];
  const draw = !winner && gameTurns.length === 9;

  function handleSelectedSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      return [
        { square: { row: rowIndex, col: colIndex }, Player: activePlayer },
        ...prevTurns,
      ];
    });
  }

  function HandlePlayerNameChange(symbol, newName) {
    setPlayers((n) => {
      return { ...n, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol={"X"}
            isActive={activePlayer === "X"}
            NameChange={HandlePlayerNameChange}
          />
          <Player
            name={PLAYERS.O}
            symbol={"O"}
            isActive={activePlayer === "O"}
            NameChange={HandlePlayerNameChange}
          />
        </ol>
        {(winner || draw) && (
          <GameOver winner={winner} restart={() => setGameTurns([])} />
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
