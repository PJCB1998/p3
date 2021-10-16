import { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
import {Link, Redirect} from 'react-router-dom'


function LoginSpecial({ handleDisplay }) {
  //variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [goodUsername, setGoodUsername] = useState(false);
  const [goodPassword, setGoodPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('')
  const [userError, setUserError] = useState('')

  useEffect(()=> {
    if (goodPassword && goodUsername){
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
    }
  },)

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
    await axios
      .post("http://localhost:3001/Login/api/auth", {
        user: username,
        password: password,
        type: "helper",
      })
      .then((res) => {
        console.log(res.data);

        if(res.data.goodPassword){
          setPasswordError('')
          setGoodPassword(true);
        }else{
          setPasswordError('woops! you may have put password incorrectly ')
          setGoodPassword(false);
        }

        if(res.data.goodUser){
          setUserError('')
          setGoodUsername(true);
        }else{
          setGoodUsername(false);
          setUserError('woops! this username does not fit here')
        }

      });
  };

  //vista
  return (localStorage.getItem("username")) ? (<Redirect to ='/chat' />)
  : (
    <div className="modal">
      <div className="modal_content">
        <div className="form">
          <div>
          <Link to ='/loginForm'>
            <button className="backButton">
              Back
            </button>
            </Link>
            <h1 className="title">Specialist</h1>
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
              <button type="submit" className="button"  onClick={handleSubmit}  >
                <span>Go</span>
              </button>

            </div>
            <div className="error">
            {!goodUsername && (
              <ErrorMessage>
                {userError}
              </ErrorMessage>
            )}
            {!goodPassword && (
              <ErrorMessage>
                {passwordError}
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
