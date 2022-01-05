import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const [userDetails, setUserDetails] = useState([]);
  const { id } = useParams();

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
    <div className="card-wrapper">
      <img src={avatar} alt="profilephoto" />

      <div className="card-content-wrapper">
        <h3>{`${first_name} ${last_name}`}</h3>

        <p>{email}</p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga tenetur
          amet nulla similique ab quos
        </p>
      </div>
    </div>
  );
};

export default UserDetail;
