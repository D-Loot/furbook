import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/furbook-logo-h-smol.svg";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className=" ">
      <div className=" ">
        <div>
          <Link className=" " to="/">
            <img src={Logo}></img>
          </Link>
          {/* <p className="m-0">A place for fur babies</p> */}
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className=" " to="/profile">
                {Auth.getProfile().data.username}'s profile
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
      </div>
    </header>
  );
};

export default Header;
