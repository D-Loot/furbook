// import Component from "components/Component";
import PostForm from "components/PostForm";
// import PostImage from "components/PostImage";
import TreatBtn from "components/Treats";
// import PostList from "components/PostList";
import React from "react";

function Home() {
  return (
    <main className="wrapper">
      <PostForm />
      <TreatBtn />
      {/* <Component /> */}
      {/* <PostImage /> */}
      {/* <PostList /> */}
    </main>
  );
}

export default Home;
