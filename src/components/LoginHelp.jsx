import { useState } from "react";
import "./Login.css";
import axios from "axios";

function LoginHelp({ handleDisplay }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "1db65471-ab4a-4d9f-8a77-4ff550fd067b",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("Incorrect Credientials");
    }
  };

  const handleEnter = async (e) => {
    e.preventDefault();

    const u = Math.random().toString(36).slice(-6)
    const p = Math.random().toString(36).slice(-6)
    setUsername(u) 
    setPassword(p)

    var data = {
      username: u,
      secret: p,
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

      const authObject = {
        "Project-ID": "1db65471-ab4a-4d9f-8a77-4ff550fd067b",
        "User-Name": u,
        "User-Secret": p,
      };
  
      try {
        await axios.get("https://api.chatengine.io/chats", {
          headers: authObject,
        });
  
        localStorage.setItem("username", u);
        localStorage.setItem("password", p);
  
        window.location.reload();
      } catch (error) {
        setError("Incorrect Credientials");
      }

  };


  return (
    <div className="modal">
      <div className="modal_content">
        <button className="backButton" onClick={handleDisplay}>
          Back
        </button>
        <div className="form">
          <h1 className="title">Help me!</h1>
          <div align="center">
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
                type='password'
                required
              ></input>
              <button type="submit" className="button">
                <span>Go</span>
              </button>
              <hr />
              <h2 className="error">{error}</h2>
            </form>
            <button align="center" className="button" type='submit' onClick={handleEnter}>
              {" "}
              Enter without Log in!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginHelp;
