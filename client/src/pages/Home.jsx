// import PostImage from "components/PostImage";
import { useQuery } from "@apollo/client";
import TreatBtn from "components/Treats";
import React from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import { QUERY_POSTS } from "../utils/queries";

function Home() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main className="wrapper">
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <PostForm />
          {/* <TreatBtn /> */}
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Latest Posts" />
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
