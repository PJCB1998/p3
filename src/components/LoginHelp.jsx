import { useState , useEffect} from "react";
import "./Login.css";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import {Link ,  Redirect, useHistory} from 'react-router-dom'

function LoginHelp() {

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

  //manejo de ingreso con validacion
  const handleSubmit = async (e) => {
    e.preventDefault();
    authUser();

    const authObject = {
      "Project-ID": "1db65471-ab4a-4d9f-8a77-4ff550fd067b",
      "User-Name": username,
      "User-Secret": password,
    };
    // validacion de usuarios
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
  // ingreso a la aplicacion sin registro, generacion automatica de usuario
  const handleEnter = async (e) => {
    e.preventDefault();

    const u = Math.random().toString(36).slice(-6);
    const p = Math.random().toString(36).slice(-6);
    setUsername(u);
    setPassword(p);

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



    } catch (error) {
      setError("Incorrect Credientials");
    }
  };

  // autentificacion de usuario, validacion de datos
  const authUser = async () => {
    await axios
      .post("http://localhost:3001/Login/api/auth", {
        user: username,
        password: password,
        type: "philler",
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

  // vistas
  return (localStorage.getItem("username"))? (<Redirect to='/chat' />)
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
            <h1 className="title">Help me!</h1>
          </div>
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
                type="password"
                required
              ></input>
              <button type="submit" className="button">
                <span>Go</span>
              </button>
              
              <hr />
            </form>
            <button
              align="center"
              className="button"
              type="submit"
              onClick={handleEnter}
            >
              {" "}
              Enter without Log in!
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

        </div>
      </div>
    </div>
  );
}



export default LoginHelp;