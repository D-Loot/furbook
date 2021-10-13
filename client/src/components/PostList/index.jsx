// import PopImage from "components/PopImage";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, title, showTitle = true, showUsername = true }) => {
  if (!posts.length) {
    return <h3>No Posts Created</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <div key={post._id} className=" ">
            <h4 className=" ">
              {showUsername ? (
                <Link className=" " to={`/profiles/${post.postAuthor}`}>
                  {post.postAuthor} <br />
                  <span style={{ fontSize: "1rem" }}>
                    had made this post on {post.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>
                    Post created on {post.createdAt}
                  </span>
                </>
              )}
            </h4>
            {/* PopImage component not working */}
            {/* <PopImage /> */}
            <div className=" ">
              <p>{post.postText}</p>
            </div>
            <Link className=" " to={`/posts/${post._id}`}>
              Leave a comment
            </Link>
          </div>
        ))}
    </div>
  );
};

// Right now the local host site will crash with the propTypes
// If we comment this out, the site will run
PostList.propTypes = {
  posts: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  showTitle: PropTypes.boolean.isRequired,
  showUsername: PropTypes.boolean.isRequired,
};

export default PostList;
