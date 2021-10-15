import { useMutation } from "@apollo/client";
// import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth.js";
import { ADD_POST } from "../../utils/mutation.js";

function PostForm() {
  const [postText, setPostText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postText,
          postAuthor: Auth.getProfile().data.username,
        },
      });

      setPostText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "postText" && value.length <= 280) {
      setPostText(value);
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
                name="postText"
                placeholder="Add your post..."
                value={postText}
                className=" "
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className=" ">
              <button className=" " type="submit">
                Add Post
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged. Please <Link to="/login">login</Link> or{" "}
          <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
}

// PostForm.propTypes = {
//   // postId: PropTypes.string.isRequired,
//   postId: PropTypes.string.isRequired,
// };

export default PostForm;
