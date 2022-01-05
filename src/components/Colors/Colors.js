import React, { useState, useEffect } from "react";
import axios from "axios";
import Color from "../Color/Color";
import "./Colors.css";

const Colors = () => {
  const [colors, setColors] = useState([]);

  const url = "https://reqres.in/api/products?per_page=12";

  const fetchData = async () => {
    const colorResponse = await axios.get(url);
    setColors(colorResponse.data.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="wrapper">
      {colors.map((color) => (
        <Color
          key={color.id}
          id={color.id}
          color={color.color}
          name={color.name}
        />
      ))}
    </div>
  );
};

export default Colors;
