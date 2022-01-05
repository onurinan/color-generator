import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const [userDetails, setUserDetails] = useState([]);
  const { id } = useParams;

  const { first_name, last_name, email, avatar } = userDetails;

  const url = `https://reqres.in/api/users/${id}`;

  const handleFetch = async () => {
    const usersResponse = await axios.get(url);
    setUserDetails(usersResponse.data.data);
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
      <h1>{first_name}</h1>
    </div>
  );
};

export default UserDetail;
