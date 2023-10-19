import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../store/context";
import api from "../Api";
function SignUp() {
  const ctx = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      const UserData = {
        username: username,
        password: password,
      };
      // post request for user signup
      axios.post(api + "/signup", UserData, {
        withCredentials: true,
      });
      navigate("/signin");
      // ctx.onFetch()
    } else {
      alert("Please enter a valid username and password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome to SignUp</h2>
      <form className="login-form" onSubmit={handleLogin} action="/signin">
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
          <button type="submit">SignUp</button>
          <button
            onClick={() => {
              navigate("/signin");
            }}
          >
            SignIn
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
