import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    
    <div>
      <nav>
        <div className="logo">
          <h1>News Website</h1>
        </div>
        <div className="right">
        <Link to="/">Home</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/business">Business</Link>
        <Link to="/health">Health</Link>
        <Link to="/sports">Sports</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
