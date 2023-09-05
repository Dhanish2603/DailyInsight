import React from "react";
import { Outlet } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <Outlet />
      <footer>
        <p>
          &copy; 2023 <span className="footer-logo">DailyInsight</span> All
          rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
