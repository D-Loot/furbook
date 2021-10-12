import { useMutation } from "@apollo/client";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth.js";
import { ADD_COMMENT } from "../../utils/mutation.js";

function CommentForm({ postId }) {
  const [commentText, setCommentText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          postId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4>Share your pet!</h4>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className=" ">{error.message}</span>}
          </p>
          <form className=" " onSubmit={handleFormSubmit}>
            <div className=" ">
              <textarea
                name="commentText"
                placeholder="Add your comment..."
                value={commentText}
                className=" "
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className=" ">
              <button className=" " type="submit">
                Add Comment
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
}

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default CommentForm;
