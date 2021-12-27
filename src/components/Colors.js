import axios from "axios";
import React, { useState, useEffect } from "react";
import Color from "./Color";
import "./Colors.css";

const Colors = () => {
  const [colors, setColors] = useState([]);

  const url = "https://reqres.in/api/products";

  const fetchData = async () => {
    const res = await axios.get(url);
    setColors(res.data.data);
  };

  useEffect(() => {
    try {
      return fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="wrapper">
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </div>
  );
};

export default Colors;
