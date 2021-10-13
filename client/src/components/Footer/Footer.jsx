import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./footer.css";

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="footer">
      <div className="footerWrap">
        {location.pathname !== "/" && (
          <Button
            className="ui button"
            id="backBtn"
            onClick={() => history.goBack()}
          >
            <i className="fas fa-angle-left"></i> Go Back
          </Button>
        )}
        <p className="footerText">Made by Dan, Ashley, Gabe & Mehalet</p>
      </div>
    </footer>
  );
};

export default Footer;
