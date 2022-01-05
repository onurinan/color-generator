import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const Homepage = () => {
  return (
    <div className="homepage-wrapper">
      <Link to={`users`}>
        <button>Users</button>
      </Link>
      <Link to={`products`}>
        <button>Colors</button>
      </Link>
    </div>
  );
};

export default Homepage;
