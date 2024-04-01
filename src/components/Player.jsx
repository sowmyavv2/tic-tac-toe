import { useState } from "react"

export default function Player({symbol, initialValue, isActive, handlePlayer}) {
    const [isEdit, setEdit] = useState(false);
    const [playerValue, setplayerName] = useState(initialValue);


    function handleEditClick() {
        setEdit((edit) => !edit);
        handlePlayer(symbol, playerValue)
    }

    function handlePlayerName(event) {
        setplayerName(event.target.value);
    }

    let playerName = <span className="player-name">{playerValue}</span>;

    if (isEdit) {
       playerName = <input type="text" required value={playerValue} onChange={handlePlayerName}></input> 
    }
    return(
        <li className={isActive ? 'active': undefined}>
      <span className="player">
      {playerName}
      <span className="player-symbol">{symbol}</span>
      </span>
        <button onClick={handleEditClick}>{isEdit ? 'Save': 'Edit'}</button>
      </li>
    )
}