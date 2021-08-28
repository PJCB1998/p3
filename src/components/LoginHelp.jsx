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
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Password"
                required
              ></input>
              <button type="submit" className="button">
                <span>Go</span>
              </button>
              <hr />
              <h2 className="error">{error}</h2>
            </form>
            <button align="center" className="button">
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