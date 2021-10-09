import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className=" ">
      <div className=" ">
        {location.pathname !== '/' && (
          <button
            className=" "
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Made by Dan, Ashley, Gabe & Mehalet
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
