import { useQuery } from "@apollo/client";
import React from "react";
// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import { QUERY_SINGLE_POST } from "../utils/queries";

const SinglePost = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    // pass URL parameter
    variables: { postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="single-post">
      <h3 className="furUser">
        {post.postAuthor} <br />
        <span style={{ fontWeight: "600", fontSize: "14px" }}>
          Posted this on {post.createdAt}
        </span>
      </h3>
      <div className="">
        <blockquote
          className="p-4"
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.5",
            backgroundColor: "var(--alabaster)",
            fontFamily: "Roboto",
          }}
        >
          {post.postText}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={post.comments} />
      </div>
      <div className="m-3 p-4">
        <CommentForm postId={post._id} />
      </div>
    </div>
  );
};

export default SinglePost;
