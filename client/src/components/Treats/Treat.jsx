import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Label } from "semantic-ui-react";

// import MyPopup from '../util/MyPopup';

function TreatButton({ user, post: { id, treatCount, treats } }) {
  const [treated, setTreated] = useState(false);

  useEffect(() => {
    if (user && treats.find((treat) => treat.username === user.username)) {
      setTreated(true);
    } else setTreated(false);
  }, [user, treats]);

  const [treatPost] = useMutation(TREAT, {
    variables: { postId: id },
  });

  const treatButton = user ? (
    treated ? (
      <Button color="teal">
        <Icon name="treat" />
      </Button>
    ) : (
      <Button color="teal" basic>
        <Icon name="treat" />
      </Button>
    )
  ) : (
    <Button as={Link} to="/login" color="teal" basic>
      <Icon name="treat" />
    </Button>
  );

  return (
    <Button as="div" labelPosition="right" onClick={treatPost}>
      {/* <MyPopup content={treated ? "Untreat" : "Treat"}>{treatButton}</MyPopup> */}
      <Label basic color="teal" pointing="left">
        {treatCount}
      </Label>
    </Button>
  );
}

const TREAT_POST_MUTATION = gql`
  mutation treatPost($postId: ID!) {
    treatPost(postId: $postId) {
      id
      treats {
        id
        username
      }
      treatCount
    }
  }
`;

export default TreatButton;
