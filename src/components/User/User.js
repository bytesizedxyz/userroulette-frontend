import React, { Component } from "react";
import { Grid, Image, Item, Card } from "semantic-ui-react";
import babyYak from "../../pages/Profile/babyYak.jpg";

export default class User extends Component {
  state = {};

  render() {
    const {
      user: { username, bio, first_name, last_name, email, link }
    } = this.props;
    return (
      <Grid centered>
        <Card>
          <Image src={babyYak} />
          <Card.Content>
            <Card.Header>
              {first_name} {last_name}
            </Card.Header>
            <Card.Meta>{username}</Card.Meta>
            <Card.Description>{bio}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Card.Description>{email}</Card.Description>
            <Card.Description>{link}</Card.Description>
          </Card.Content>
        </Card>
      </Grid>
    );
  }
}
