import Component from "components/Component";
import PostForm from "components/PostForm";
import TestComp from "components/TestComp";
import Treats from "components/Treats";
// import PostList from "components/PostList";
import React from "react";

function Home() {
  return (
    <main className="wrapper">
      <PostForm />
      <TestComp />
      <Component />
      <Treats />
      {/* <PostList /> */}
    </main>
  );
}

export default Home;
