import { useState } from "react";
import React from "react";
import axios from "axios";
import api from "../Api";
const AuthContext = React.createContext({
  isLoggedIn: false,
  onFetch: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const cookieHandler = () => {
    const response = axios.post(api + "/cookieCheck");

    if (response) {
      setLoggedIn(true);
      console.log(isLoggedIn);
    } else {
      console.log(isLoggedIn);
      setLoggedIn(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onFetch: cookieHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
