import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
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
