import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/context";
import api from "../Api";

function Auth() {
  const authctx = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authState, setauthState] = useState(false);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      const UserData = {
        username,
        password,
      };
      console.log(authctx.isLoggedIn);

      // post request for user signup
      await axios.post(api + authState ? "/signin" : "/signup", UserData, {
        withCredentials: true,
      });

      const response = authCtx.onFetch();
      if (response == 1) {
        console.log(authCtx.isLoggedIn);
      }
    } else {
      console.log(authCtx.isLoggedIn);
      alert("Please enter a valid username and password.");
    }
  };

  return (
    <div className="login-container">
      <h2> Welcome to SignIn</h2>
      <form className="login-form" action="/">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button">
          {authState ? (
            <button type="submit" onClick={handleLogin}>
              SignIn
            </button>
          ) : (
            <button type="submit" onClick={handleLogin}>
              SignIn
            </button>
          )}
          <button onClick={() => navigate("/signup")}>SignUp</button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
