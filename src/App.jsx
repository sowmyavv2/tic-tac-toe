import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning-combination";
import GameOver from "./components/GameOver";
function App() {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  const [player, setPlayer] = useState({
    X: "Player 1",
    0: "Player 2"
  })
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const [hasWinner, setHasWinnner] = useState();

  let gameBoard = initialGameBoard;
  let winner = null;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player
  }


  for (const combination of WINNING_COMBINATIONS) {
    const firstCombi = gameBoard[combination[0].row][combination[0].column]
    const secondCombi = gameBoard[combination[1].row][combination[1].column]
    const thirsCombi = gameBoard[combination[2].row][combination[2].column]
    if (firstCombi && firstCombi === secondCombi && firstCombi === thirsCombi) {
      winner = player[firstCombi];

    }
  }


  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? '0' : 'X');
    setGameTurns(prevturns => {

      // let currPlayer = 'X';
      // if(prevturns[0].player === 'X') {
      //   currPlayer = '0';
      // }
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevturns];
      return updatedTurns;
    });


  }

  function handlePlayer(symbol, newName) {
    setPlayer(prevPlayer => {
      return {
        ...prevPlayer,
        [symbol]: newName
      }
    })
  }

  function Rematch() {
    setGameTurns([]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">


          <Player initialValue="Player 1" symbol="X" isActive={activePlayer === 'X'} handlePlayer={handlePlayer} />
          <Player initialValue="Player 2" symbol="0" isActive={activePlayer === '0'} />
        </ol>
        {winner && <GameOver winner={winner} Rematch={Rematch} />}
        <GameBoard onSelectSquare={handleSelectSquare} activePlayer={activePlayer} board={gameBoard}
          turns={gameTurns}
        />
        <Log turns={gameTurns} />
      </div>

    </main>
  )
}

export default App
