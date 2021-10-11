import PropTypes from "prop-types";
import React from "react";
import { Popup } from "semantic-ui-react";

function MyPopup({ content, children }) {
  return <Popup inverted content={content} trigger={children} />;
}

MyPopup.propTypes = {
  content: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default MyPopup;
