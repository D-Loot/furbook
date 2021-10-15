import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/furbook_logo_K.svg";
import Auth from "../../utils/auth";
import "./header.css";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="navHeader">
      <div className="left">
        <div>
          <Link className="logoLink" to="/">
            <img src={Logo} className="logoImg" />
          </Link>
          <p className="tagline">A place for your fur babies</p>
        </div>
      </div>
      <div className="right">
        {Auth.loggedIn() ? (
          <>
            <Link className="navBtn" to="/me">
              <button className="ui primary button">
                {Auth.getProfile().data.username}&rsquo;s profile
              </button>
            </Link>
            <button className="navBtn" onClick={logout}>
              <button className="ui inverted button">Logout</button>
            </button>
          </>
        ) : (
          <>
            <Link className="navBtn" to="/login">
              <button className="ui primary button">Login</button>
            </Link>
            <Link className="navBtn" to="/register">
              <button className="ui primary button">Signup</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
