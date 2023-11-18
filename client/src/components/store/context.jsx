import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import api from "../Api";
const AuthContext = React.createContext({
  isLoggedIn: false,
  onFetch: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const cookieHandler = async () => {
    const response = await axios.post(api + "/cookieCheck");
    console.log(response);
    if (response.data === true) {
      // console.log('not working' )
      setLoggedIn(true);
      console.log(isLoggedIn);
    } else {
      // console.log(isLoggedIn);
      setLoggedIn(false);
    }
    console.log(isLoggedIn);
  };
  useEffect(() => {
    cookieHandler();
  });

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onFetch: cookieHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
