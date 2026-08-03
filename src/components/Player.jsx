import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onNameChange }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit(){
        setIsEditing((editing) => !editing);
        if(isEditing){
            onNameChange(symbol, playerName);
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined} data-symbol={symbol}>
            <span className="player" >
                {isEditing ? <input type="text" value={playerName} onChange={handleChange} aria-label={`Name for player ${symbol}`} maxLength={14}/> : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit} aria-label={`${isEditing ? 'Save' : 'Edit'} ${playerName}'s name`}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}
