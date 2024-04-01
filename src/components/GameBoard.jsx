//import { useState } from "react"



export default function GameBoard({ onSelectSquare,turns, board }) {

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayer;
    //         return updatedBoard;

    //     })
    //     onSelectSquare();
    // }

   


    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((col, colIndex) => <li key={colIndex}><button disabled={col != null} onClick={() => onSelectSquare(rowIndex, colIndex)}>{col}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )

}