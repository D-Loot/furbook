import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
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
