import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <div key={post._id} className=" ">
            <h4 className=" ">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${post.postAuthor}`}
                >
                  {post.postAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had made this post on {post.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    Post created on {post.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className=" ">
              <p>{post.postText}</p>
            </div>
            <Link
              className=" "
              to={`/posts/${post._id}`}
            >
              Leave a comment
            </Link>
          </div>
        ))}
    </div>
  );
};

export default postList;
