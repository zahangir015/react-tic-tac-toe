import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log";
import {winningCombinations} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveCurrentPlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function deriveWinner(gameboard, playerNames) {
  let winner = null;

  for (const combination of winningCombinations) {
    const [first, second, third] = combination;
    const firstSymbol = gameboard[first.row][first.col];
    const secondSymbol = gameboard[second.row][second.col];
    const thirdSymbol = gameboard[third.row][third.col];

    if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
      winner = playerNames[firstSymbol];
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameboard = [ ...INITIAL_GAME_BOARD.map(innerArray => [...innerArray]) ];
  for (const turn of gameTurns) {
      const { row, col } = turn.squre;
      gameboard[row][col] = turn.player;
  }
  return gameboard;
}

function App() {
  const [playerNames, setPlayerNames] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveCurrentPlayer(gameTurns);
  const currentPlayerName = playerNames[currentPlayer];

  const gameboard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameboard, playerNames);
  
  let hasDraw = false;
  if (!winner) {
    hasDraw = gameTurns.length === 9;
  }

  function handleSelectSqure(rowIndex, colIndex) {
    setGameTurns((previousTurns) => {
      const currentPlayer = deriveCurrentPlayer(previousTurns);
      const newTurn = { squre: { row: rowIndex, col: colIndex }, player: currentPlayer };

      return [newTurn, ...previousTurns];
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayerNames((previousNames) => {
      return { ...previousNames, [playerSymbol]: newName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={playerNames.X} symbol="X" isActive={currentPlayer === 'X'} onNameChange={handlePlayerNameChange} />
          <Player initialName={playerNames.O} symbol="O" isActive={currentPlayer === 'O'} onNameChange={handlePlayerNameChange} />
        </ol>
        <div className={`turn-status player-${currentPlayer.toLowerCase()}`} aria-live="polite">
          <span className="status-dot" />
          <span><strong>{currentPlayerName}</strong>, your turn</span>
        </div>
        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} /> }
        <GameBoard onSelectSqure={handleSelectSqure} board={gameboard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
