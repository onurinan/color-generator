import React from "react";
import { Link } from "react-router-dom";
import "./User.css";

const User = ({ first_name, last_name, email, avatar, id }) => {
  return (
    <Link to={`/users/${id}`}>
      <div className="card-wrapper">
        <img src={avatar} alt="profilephoto" />

        <div className="card-content-wrapper">
          <h3>{`${first_name} ${last_name}`}</h3>

          <p>{email}</p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            tenetur amet nulla similique ab quos
          </p>
        </div>
      </div>
    </Link>
  );
};

export default User;
