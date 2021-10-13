import React from "react";
import { Button, Label } from "semantic-ui-react";

const ButtonExampleLabeledBasic = () => (
  <div>
    <Button as="div" labelPosition="right">
      <Button color="red">
        <i className="fas fa-bone">&nbsp;&nbsp;</i>
        Treat
      </Button>
      <Label as="a" basic color="red" pointing="left">
        2,048
      </Label>
    </Button>
    <Button as="div" labelPosition="right">
      <Button basic color="blue">
        <i className="fas fa-comment">&nbsp;&nbsp;</i>
        Comment
      </Button>
      <Label as="a" basic color="blue" pointing="left">
        2,048
      </Label>
    </Button>
  </div>
);

export default ButtonExampleLabeledBasic;
