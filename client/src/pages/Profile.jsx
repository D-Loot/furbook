import { useQuery } from "@apollo/client";
// import PostForm from "components/PostForm";
import PostList from "components/PostList";
import React from "react";
import { Redirect, useParams } from "react-router-dom";
import Auth from "../utils/auth";
import { QUERY_ME, QUERY_USER } from "../utils/queries";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="mb-3">
        <h2 className="profileHL">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>

        <div className="">
          <PostList
            posts={user.posts}
            title={`${user.username}'s posts...`}
            showTitle={true}
            showUsername={true}
          />
        </div>
        {!userParam && <div className="">{/* <PostForm /> */}</div>}
      </div>
    </div>
  );
};

export default Profile;
