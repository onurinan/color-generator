import axios from "axios";
import React, { useState, useEffect } from "react";
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
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
