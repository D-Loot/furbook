// import PopImage from "components/PopImage";
import Treats from "components/Treats";
import React from "react";
import { Link } from "react-router-dom";
import config from "../../utils/config";
import "./postList.css";

const PostList = ({ posts, username = true }) => {
  if (!posts.length) {
    return <h3>No Posts Created</h3>;
  }
  return (
    <div className="allPosts">
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="userList">
            <h4>
              {username ? (
                <div className="eaUser">
                  <Link to={`/profiles/${post.postAuthor}`}>
                    <span className="furUser">{post.postAuthor} </span>
                    <br />
                    <span className="created">
                      Post created on {post.createdAt}
                    </span>
                  </Link>
                </div>
              ) : (
                <>
                  <span className="created">
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
                width="300"
                // eslint-disable-next-line no-return-assign
                onError={(event) => (event.target.style.display = "none")}
              />
            }
            {/* PopImage component not working */}
            {/* <PopImage /> */}
            <div className="postTxt">
              <p>{post.postText}</p>
            </div>
            <div className="commentBtn">
              <Link to={`/posts/${post._id}`}>
                <button className="ui button olive">Leave a comment</button>
              </Link>
            </div>
            <div className="treatBtn">
              <Treats postId={post._id} treatCount={post.treatCount} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
