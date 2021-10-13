import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const ProfileInfo = () => (
  <Card>
    <Image
      src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        10 Friends
      </a>
    </Card.Content>
  </Card>
);

export default ProfileInfo;
