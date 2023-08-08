import React, { useState } from "react";

function SignUp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      setIsLoggedIn(true);
      console.log(username);
      const newsdata = fetch("http://localhost:5000/signup", {
      method: "POST",
       mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       username:username,
       password:password
      }),
    })
      .then((data) => {
        console.log("completed");
      })
      .catch((err) => {
        console.log(err);
      });
      // newsdata();
    } else {
      alert("Please enter a valid username and password.");
    }
  };

  return (
    <div className="login-container">
      <h2>SignUp</h2>
      <form className="login-form" onSubmit={handleLogin} action="/">
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

        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}

export default SignUp;
