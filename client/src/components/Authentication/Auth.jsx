import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import AuthContext from "../context/AuthContext";

import { useNavigate } from "react-router-dom";
import api from "../Api";
import AuthContext from "../store/context";
export default function MainSignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [switchLogin, setSwitchLogin] = useState(false);

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  // signup
  const handleSignup = async (e) => {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      const UserData = {
        username: username,
        password: password,
      };
      // post request for user signup
      await axios.post(api + "/signup", UserData, {
        withCredentials: 'include',
      });
    } else {
      alert("Please enter a valid username and password.");
    }
  };

  //   singin
  const handleLogin = async (e) => {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      const UserData = { username: username, password: password };
      // post request of user using axios
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": 'GET, POST, PUT, DELETE, OPTIONS',
        }
      };
      await axios.post(api + "/signin", UserData,axiosConfig, {
        withCredentials: 'include',
      });
      // check token is valid or not
      auth.onFetch();
      console.log(auth.isLoggedIn);
      // navigate("/");
      window.location.reload();
    } else {
      alert("Please enter a valid username and password.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="login-container">
        <h2>Welcome to DailyInsight</h2>

        <div className="switch">
          <button className="switchbtn" onClick={() => setSwitchLogin(true)}>
            SignIn
          </button>
          <div className="line"></div>
          <button className="switchbtn" onClick={() => setSwitchLogin(false)}>
            SiginUp
          </button>
        </div>
        <div className="banner">
          {switchLogin ? <i>Please Login</i> : <i>SignUp to first</i>}
        </div>
        <form className="login-form">
          {/* <label htmlFor="username">Username:</label> */}
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {/* <label htmlFor="password">Password:</label> */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {switchLogin ? (
            <button type="submit" className="submitbtn" onClick={handleLogin}>
              Login
            </button>
          ) : (
            <button className="submitbtn" type="submit" onClick={handleSignup}>
              Register
            </button>
          )}

          {/* <div>
                        or create an new account!...
                        <Link to="/signup">signup page</Link>
                    </div> */}
        </form>
      </div>
    </div>
  );
}
