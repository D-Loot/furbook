import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/furbook-logo-h-smol.svg";
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
            <img src={Logo} className="logoImg" width="200" />
          </Link>
          {/* <p className="m-0">A place for fur babies</p> */}
        </div>
      </div>
      <div className="right">
        {Auth.loggedIn() ? (
          <>
            <Link className=" " to="/profile">
              {Auth.getProfile().data.username}&rsquo;s profile
            </Link>
            <button className=" " onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className=" " to="/login">
              Login
            </Link>
            <Link className=" " to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
