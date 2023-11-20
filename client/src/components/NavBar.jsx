import React, { useContext,useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import AuthContext from "./store/context";
import api from "./Api";
import Auth from "./Authentication/Auth";
const NavBar = () => {
  const authctx = useContext(AuthContext);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const isOpen = (e) => {
    setModal(true);
  };
  const isCLose = (e) => {
    setModal(false);
  };
  const logout = () => {
    console.log(authctx.isSignIn);
    axios.post(api + "/signout");
    console.log("done");
    authctx.onFetch();
    console.log(authctx.isSignIn);
  };

  return (
    <div>
      <nav>
        <div className="logo" onClick={()=>navigate("/")}>
          <h1>DailyInsight</h1>
        </div>
        <div className="right">
          <Link to="/technology">Technology</Link>
          <Link to="/business">Business</Link>
          <Link to="/health">Health</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/bookmark">Bookmark</Link>
          {authctx.isLoggedIn ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={isOpen}>Login</button>
          )}

          {modal && <Auth />}
          {authctx.isLoggedIn == true && modal && <Auth />}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
