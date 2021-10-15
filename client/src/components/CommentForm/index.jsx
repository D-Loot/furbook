import { useMutation } from "@apollo/client";
// import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { ADD_COMMENT } from "../../utils/mutation";
import "./commentForm.css";

const CommentForm = ({ postId }) => {
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
    <div className="">
      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 text-xs text-medGray mb-2 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="input-box">
              <textarea
                name="commentText"
                placeholder="Add your comment..."
                value={commentText}
                className=""
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="ui button primary" type="submit">
                Add Comment
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your comments. Please{" "}
          <Link to="/login">login</Link> or <Link to="/register">signup.</Link>
        </p>
      )}
    </div>
  );
};

// CommentForm.propTypes = {
//   postId: PropTypes.string.isRequired,
// };

export default CommentForm;
