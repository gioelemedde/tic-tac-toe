import { useState } from "react";

export default function Player({ initialName, symbol, isActive , onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handlEditClick() {
    setIsEditing((preIsEditing) => !preIsEditing);

    if (isEditing) {
      onChangeName(symbol, playerName)
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayernName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayernName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayernName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handlEditClick}>{btnCaption}</button>
      </span>
    </li>
  );
}
