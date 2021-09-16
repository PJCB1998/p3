import React, { useState } from "react";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

const Register = ({ handleDisplay }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("helper");
  const [error, setError] = useState("");
  const [goodUsername, setGoodUsername] = useState(true);
  const [goodPassword, setGoodPassword] = useState(true);
  const [isAviable, setIsAviable] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    insertUser();

    if (goodUsername && goodPassword && isAviable) {
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

      await axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

        enterPage()
    } 
  };

  const insertUser = async () => {
    setGoodPassword(true);
    setGoodUsername(true);
    setIsAviable(true);

    await axios
      .post("http://localhost:3001/Registro/api/insert", {
        user: username,
        password: password,
        type: type,
      })
      .then((res) => {
        console.log(res);
        setGoodPassword(res.data.isPassword);
        setGoodUsername(res.data.isUser);
        const aviable = res.data.error === 1062 ? false : true;
        console.log(aviable);
        setIsAviable(aviable);
      });
  };


  const enterPage = async ()=> {
    const authObject= { 'Project-ID':"1db65471-ab4a-4d9f-8a77-4ff550fd067b",'User-Name':username,'User-Secret':password};

    try {
       await axios.get('https://api.chatengine.io/chats',{ headers: authObject});

       localStorage.setItem('username',username);
       localStorage.setItem('password', password);

       window.location.reload();
    } 
    
    catch(error){
        setError('Incorrect Credientials')
    }
  }

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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Password"
              type="password"
              required
            ></input>
            <select
              className="input"
              defaultValue="helper"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="helper">Helper</option>
              <option value="philler">Philler</option>
            </select>
            <div align="center">
              <button type="submit" className="button">
                <span>Go</span>
              </button>
            </div>
            {!goodUsername && (
              <ErrorMessage>
                woops, bad User: should be between 4 and 20 characters long
              </ErrorMessage>
            )}
            {!goodPassword && (
              <ErrorMessage>
                woops password: should be between 4 and 20 characters long
              </ErrorMessage>
            )}
            {!isAviable && (
              <ErrorMessage>woops, that username already exists</ErrorMessage>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};



export default Register;
