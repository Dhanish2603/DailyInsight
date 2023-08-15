import React, { useContext } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import AuthContext from "../store/context";

const NavBar = () => {
  const authctx = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    
    console.log(authctx.isSignIn)
    axios.post("http://localhost:5000/signout");
    console.log("done");
    authctx.onFetch();
    console.log(authctx.isSignIn)
    navigate("/sigin");
  };
  return (
    <div>
      <nav>
        <div className="logo">
          <h1
            onClick={() => {
              navigate("/");
            }}
          >
            GlobalUpdate
          </h1>
          <h1
            onClick={() => {
              navigate("/");
            }}
          >
            GlobalUpdate
          </h1>
        </div>
        <div className="right">
          <Link to="/technology">Technology</Link>
          <Link to="/business">Business</Link>
          <Link to="/health">Health</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/bookmark">Bookmark</Link>
          <Link onClick={logout} className="button" to="/signin">
            SignOut
          </Link>
          <Link to="/technology">Technology</Link>
          <Link to="/business">Business</Link>
          <Link to="/health">Health</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/bookmark">Bookmark</Link>
          <Link onClick={logout} className="button" to="/signin">
            SignOut
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
