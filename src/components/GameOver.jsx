export default function GameOver({winner, Rematch}) {

    return(
        <div id="game-over">
            <h2>Game Over</h2>
            <p>{winner} won!</p>
            <p><button onClick={Rematch}>Rematch</button></p>
        </div>
    )

  
}