import React, { Component } from "react";
import { Grid, Card } from "semantic-ui-react";
import Gravatar from "react-gravatar";
import "./User.css";

export default class User extends Component {
  state = {};

  render() {
    const {
      user: { username, bio, first_name, last_name, email, link }
    } = this.props;
    return (
      <Grid centered container>
        <Grid.Row>
          <Grid.Column width="5">
            <Card fluid>
              <Gravatar email={email} />
              <Card.Content>
                <Card.Header>
                  {first_name} {last_name}
                </Card.Header>
                <Card.Meta>{username}</Card.Meta>
                <Card.Description>{bio}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Card.Description as="a" target="_blank" href={link ? link : null}>
                  {link ? link : "No Link"}
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
