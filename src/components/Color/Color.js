import React, { useState } from "react";
import "./Color.css";

const Color = ({ color, name, id }) => {
  const [showHex, setShowHex] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    !showHex ? setShowHex(true) : setShowHex(false);
  };

  return (
    <div
      className="color-wrapper"
      style={{
        backgroundColor: color,
        border: id % 2 === 0 ? "2px solid black" : "2px solid white",
      }}
      onClick={handleClick}
    >
      {name}
      {showHex && <p>{color}</p>}
    </div>
  );
};

export default Color;
