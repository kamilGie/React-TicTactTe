import { useState } from "react";
export default function Player({ name, symbol }) {
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

  return (
    <li>
      <span className="player">
        {playerPlaceHolder}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEdyting((e) => !e)}>
        {isEdyting ? "Save" : "Edit"}
      </button>
    </li>
  );
}
