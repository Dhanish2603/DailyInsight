import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
const NavBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    axios.post("http://localhost:5000/signout");
    console.log("done");
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
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
