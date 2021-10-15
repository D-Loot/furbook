// import PopImage from "components/PopImage";
import React from "react";
import { Link } from "react-router-dom";
import config from "../../utils/config";

const PostList = ({ posts, username = true }) => {
  if (!posts.length) {
    return <h3>No Posts Created</h3>;
  }
  console.log(posts);
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
            {
              <img
                key={post.postImage.imageId}
                src={`${config.cloudinary.baseURL}/${config.cloudinary.transformation}/v${post.postImage.version}/${post.postImage.imageId}.${post.postImage.format}`}
                // /TODO: Add a proper alt tag ♿
                alt="a proper alt tag"
                width="500"
                // eslint-disable-next-line no-return-assign
                onError={(event) => (event.target.style.display = "none")}
              />
            }
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

export default PostList;
