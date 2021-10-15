import { useMutation } from "@apollo/client";
// import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { APIService } from "../../services";
import Auth from "../../utils/auth";
import config from "../../utils/config";
import { ADD_POST } from "../../utils/mutation";
import "./postForm.css";

function PostForm() {
  const [postText, setPostText] = useState("");
  // const [postImage, setPostImage] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [postImage, setImage] = React.useState([]);
  const inputRef = React.useRef();

  const [addPost, { error }] = useMutation(ADD_POST, {
    refetchQueries: ["getPosts"],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const object2 = { ...postImage, version: postImage.version.toString() };
      const { data } = await addPost({
        variables: {
          postImage: object2,
          postText,
        },
      });

      setPostText("");
      setImage("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleTextChange = (event) => {
    const { name, value } = event.target;

    if (name === "postText" && value.length <= 280) {
      setPostText(value);
      setCharacterCount(value.length);
    }
  };

  const handleImageChange = async (event) => {
    // Get the file from the input before clearing it
    const file = event.target.files[0];

    inputRef.current.value = "";
    APIService.create(
      file,
      Auth.getProfile().data.username
      // TODO: Replace this with the user's id from Context
      // uuid()
    ).then(({ format, public_id: imageId, version }) => {
      setImage(
        // TODO: Send this info ℹ️ to the backend
        { format, imageId, version }
      );
    });
  };

  return (
    <div className="post-form">
      <h4 className="share-pet">Share your pet!</h4>

      {Auth.loggedIn() ? (
        <>
          {
            <img
              key={postImage.imageId}
              src={`${config.cloudinary.baseURL}/${config.cloudinary.transformation}/v${postImage.version}/${postImage.imageId}.${postImage.format}`}
              // /TODO: Add a proper alt tag ♿
              alt="a proper alt tag"
              width="300"
              // eslint-disable-next-line no-return-assign
              onError={(event) => (event.target.style.display = "none")}
            />
          }
          <p
            className={`m-0 text-xs text-brightBlue ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className=" ">{error.message}</span>}
          </p>
          <form className="" onSubmit={handleFormSubmit}>
            <label className="uploadBtn">
              Upload Image
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                ref={inputRef}
              />
            </label>
            <div className="ui form mb-3">
              <textarea
                name="postText"
                placeholder="Add your post..."
                value={postText}
                className=" "
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleTextChange}
              ></textarea>
            </div>

            <div>
              <button className="ui button primary" type="submit">
                Add Post
              </button>
            </div>
          </form>
        </>
      ) : (
        <p className="log-in">
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
