import PopImage from "components/PopImage";
import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, username = true }) => {
  if (!posts.length) {
    return <h3>No Posts Created</h3>;
  }

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className=" ">
            <h4 className=" ">
              {username ? (
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
            <PopImage />
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

export default PostList;
