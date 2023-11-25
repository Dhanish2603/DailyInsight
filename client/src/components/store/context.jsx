import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import api from "../Api";
const AuthContext = React.createContext({
  isLoggedIn: false,
  bookmark: [],
  onFetch: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [bookmark, setbookmark] = useState([]);

  const fetchBookmark = () => {};

  const cookieHandler = async () => {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "GET, POST, PUT, DELETE, OPTIONS",
      },
    };
    const response = await axios.post(api + "/cookieCheck", axiosConfig);
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
    fetchBookmark();
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
