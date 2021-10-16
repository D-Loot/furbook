// import PropTypes from "prop-types";
import React from "react";
import "./commentList.css";

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <div className="comment-cont">
      <h3 className="p-5 display-inline-block">Comments</h3>
      <div className="flex-row my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="">
                <h5 className="card-header">
                  {comment.commentAuthor} commented{" "}
                  <span style={{ fontSize: "0.825rem" }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="card-body">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

// CommentList.propTypes = {
//   comments: PropTypes.string.isRequired,
// };

export default CommentList;
