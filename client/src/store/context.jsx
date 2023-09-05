import axios from "axios";
import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isSignIn: null,
  onFetch: () => {},
});

export const AuthContextProvider = (props) => {
  const [isSignIn, setIsSignIn] = useState();

  const cookieHandler = () => {
    axios.post("http://localhost:5000/cookieCheck").then((response) => {
      console.log(response.data + "this is ");
      if (response.data === true) {
        console.log(isSignIn + "latest");
        return setIsSignIn(1);
      }
      if (response.data === false) {
        console.log(isSignIn + "late");
        return setIsSignIn(0);
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isSignIn: isSignIn,
        onFetch: cookieHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
