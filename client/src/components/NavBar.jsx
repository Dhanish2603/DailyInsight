import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>News Website</h1>
        </div>
        <div className="right">
        <a>Home</a>
        <a>Politics</a>
        <a>Technology</a>
        <a>Business</a>
        <a>Entertainment</a>
        <a>Sports</a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
