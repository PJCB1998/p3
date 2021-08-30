import React, { useState } from "react";
import axios from "axios";

const Register = ({ handleDisplay }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    var data = {
      username: username,
      secret: password,
    };

    var config = {
      method: "post",
      url: "https://api.chatengine.io/users/",
      headers: {
        "PRIVATE-KEY": "e86d5343-bc74-4548-9f4b-a64b158ded60",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <div className="modal">
      <div className="modal_content">
        <button className="backButton" onClick={handleDisplay}>
          Back
        </button>
        <div className="form">
          <h1 className="title">Sign in</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Username"
              required
            ></input>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Password"
              type='password'
              required
            ></input>
            <div align="center">
              <button type="submit" className="button">
                <span>Go</span>
              </button>
            </div>
            <div className="error">
              <h2>{error}</h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
