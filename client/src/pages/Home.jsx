// import Component from "components/Component";
import PostForm from "components/PostForm";
// import PostImage from "components/PostImage";
import TestComp from "components/TestComp";
// import Treats from "components/Treats";
// import PostList from "components/PostList";
import React from "react";

function Home() {
  return (
    <main className="wrapper">
      <PostForm />
      <TestComp />
      {/* <Component /> */}
      {/* <PostImage /> */}
      {/* <Treats /> */}
      {/* <PostList /> */}
    </main>
  );
}

export default Home;
