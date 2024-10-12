import Player from "./components/player.jsx";
import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/log.jsx";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectedSquare(rowIndex, colIndex) {
    setActivePlayer((ap) => (ap === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      const curPlayer = prevTurns.length % 2 == 1 ? "O" : "X";
      return [
        { square: { row: rowIndex, col: colIndex }, Player: curPlayer },
        ...prevTurns,
      ];
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
          />
          <Player
            name={"player 2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard turns={gameTurns} OnSelectedSquere={handleSelectedSquare} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
