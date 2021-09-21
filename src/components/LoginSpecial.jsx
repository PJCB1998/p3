import { useState } from "react";
import "./Login.css";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

function LoginSpecial({ handleDisplay }) {
  //variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [goodUsername, setGoodUsername] = useState(true);
  const [goodPassword, setGoodPassword] = useState(true);

  //metodo submit, maneja credenciales incorrectas e ingreso a la aplicacion
  const handleSubmit = async (e) => {
    e.preventDefault();
    authUser();

    const authObject = {
      "Project-ID": "1db65471-ab4a-4d9f-8a77-4ff550fd067b",
      "User-Name": username,
      "User-Secret": password,
    };

    //verificacion de credenciales
    if (goodUsername && goodPassword) {
      alert("pq");
      try {
        await axios.get("https://api.chatengine.io/chats", {
          headers: authObject,
        });

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        //ingreso a la aplicacion
        window.location.reload();
      } catch (error) {
        setError("Incorrect Credientials");
      }
    }
  };

  // conexion con backend, validar usuario
  const authUser = async () => {
    const x = await axios
      .post("http://localhost:3001/Login/api/auth", {
        user: username,
        password: password,
        type: "helper",
      })
      .then((res) => {
        console.log(res);
        setGoodPassword(res.data.goodPassword);
        setGoodUsername(res.data.goodUser);
      });
    return x;
  };

  //vista
  return (
    <div className="modal">
      <div className="modal_content">
<<<<<<< HEAD
        <div className="form">
          <div>
            <button className="backButton" onClick={handleDisplay}>
              Back
            </button>
            <h1 className="title">Specialist</h1>
=======
        
        <div className="form">
          <div>
          <button className="backButton" onClick={handleDisplay}>
          Back
        </button>
          <h1 className="title">Specialist</h1>
>>>>>>> ef4ace64594147f173fad075196f6020649e9fde
          </div>
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Password"
              required
            ></input>
            <div align="center">
              <button type="submit" className="button">
                <span>Go</span>
              </button>
            </div>
            <div className="error">
              {!goodUsername && (
                <ErrorMessage>
                  woops! this username does not fit here
                </ErrorMessage>
              )}
              {!goodPassword && (
                <ErrorMessage>
                  woops! you may have put password incorrectly
                </ErrorMessage>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSpecial;
