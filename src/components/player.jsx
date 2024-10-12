import { useState } from "react";
export default function Player({ name, symbol, isActive, NameChange }) {
  const [isEdyting, setIsEdyting] = useState(false);
  const [dynamicName, setDynamicName] = useState(name);

  const playerPlaceHolder = isEdyting ? (
    <input
      type="text"
      required
      value={dynamicName}
      onChange={(e) => setDynamicName(e.target.value)}
    />
  ) : (
    <span className="player-name">{dynamicName} </span>
  );

  function onButtonClick() {
    setIsEdyting((e) => !e);

    if (isEdyting === true) {
      NameChange(symbol, dynamicName);
    }
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerPlaceHolder}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onButtonClick}>{isEdyting ? "Save" : "Edit"}</button>
    </li>
  );
}
