import React, { Component } from "react";
import { Grid, Image, Item } from "semantic-ui-react";
import babyYak from "../../pages/Profile_Page/babyYak.jpg";

export default class User extends Component {
  state = {};

  render() {
    const {
      user: { username, bio, first_name, last_name, email, link }
    } = this.props;
    console.log(username);
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column computer="3">
            <Image floated="left" size="huge" src={babyYak} />
          </Grid.Column>
          <Grid.Column computer="7">
            <ul>
              <Item.Header as={"a"} href={link}>
                <li>{username}</li>
              </Item.Header>
              <Grid.Column>
                <li>
                  {first_name} {last_name}
                </li>
              </Grid.Column>
              <Grid.Column>
                <li>{link}</li>
              </Grid.Column>
            </ul>
          </Grid.Column>
          <Grid.Column computer="10" style={{ margin: 20 }}>
            <Item.Description>{bio}</Item.Description>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
