import React, { useState } from "react";
import "./Color.css";

const Color = ({ color }) => {
  const [showHex, setShowHex] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    !showHex ? setShowHex(true) : setShowHex(false);
  };

  return (
    <div
      className="color-wrapper"
      style={{
        backgroundColor: color.color,
        border: color.id % 2 === 0 ? "2px solid black" : "2px solid white",
      }}
      onClick={handleClick}
    >
      {color.name}
      {showHex && <p>{color.color}</p>}
    </div>
  );
};

export default Color;
