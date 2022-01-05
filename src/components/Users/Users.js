import axios from "axios";
import React, { useState, useEffect } from "react";
import User from "../User/User";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  const url = "https://reqres.in/api/users?per_page=12";

  const handleFetch = async () => {
    const usersResponse = await axios.get(url);
    setUsers(usersResponse.data.data);
  };

  useEffect(() => {
    try {
      handleFetch();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="user-wrapper">
      {users.map((user) => (
        <User
          id={user.id}
          key={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
          avatar={user.avatar}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default Users;
