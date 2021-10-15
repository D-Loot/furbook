import React, { useState } from "react";
import { Button, Label } from "semantic-ui-react";
const TreatBtn = () => {
  const [counter, setCounter] = useState(0);
  const clickedCounter = () => {
    setCounter(counter + 1);
    // useEffect
  };
  return (
    <div>
      <Button as="div" labelPosition="right">
        <Button onClick={clickedCounter} color="red">
          <i className="fas fa-bone">&nbsp;&nbsp;</i>
          Treat
        </Button>
        <Label as="a" basic color="orange" pointing="left">
          {counter}
        </Label>
      </Button>
      {/* <Button as="div" labelPosition="right">
        <Button basic color="blue">
          <i className="fas fa-comment">&nbsp;&nbsp;</i>
          Comment
        </Button>="left">
          2,048
        <Label as="a" basic color="blue" pointing
        </Label>
      </Button> */}
    </div>
  );
};
export default TreatBtn;
