import { useMutation } from "@apollo/react-hooks";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Label } from "semantic-ui-react";
import { ADD_TREAT } from "../../utils/mutation.js";
import MyPopup from "../util/popup.js";


function TreatButton({ user, post: { id, treatCount, treats } }) {
  const [treated, setTreated] = useState(false);

  // const [addTreat, { error }] = useMutation(ADD_TREAT);

  useEffect(() => {
    if (user && treats.find((treat) => treat.username === user.username)) {
      setTreated(true);
    } else setTreated(false);
  }, [user, treats]);

  const [treatPost] = useMutation(ADD_TREAT, {
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
      <MyPopup content={treated ? "Untreat" : "Treat"}>{treatButton}</MyPopup>
      <Label basic color="teal" pointing="left">
        {treatCount}
      </Label>
    </Button>
  );
}

TreatButton.propTypes = {
  post: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  treatCount: PropTypes.number.isRequired,
  treats: PropTypes.string.isRequired
}

export default TreatButton;
