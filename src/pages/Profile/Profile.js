import React, { Component } from "react";
import User from "../../components/User";
import api from "../../api";
import { Grid, Header } from "semantic-ui-react";

export default class Profile extends Component {
  state = {
    username: null,
    bio: null,
    first_name: null,
    last_name: null,
    email: null,
    link: null
  };

  componentDidMount() {
    this.fetchUser();
  }
  fetchUser = async () => {
    const reqUsername = this.props.location.pathname.split("/")[1];

    const userReponse = await api.get(`users/${reqUsername}`);

    if (!userReponse.data.user.length) {
      return;
    } else {
      const { username, bio, first_name, last_name, email, link } = userReponse.data.user[0];
      this.setState({ username, bio, first_name, last_name, email, link });
    }
  };

  render() {
    const { username, bio, first_name, last_name, email, link } = this.state;
    const UserInfo = {
      username,
      bio,
      first_name,
      last_name,
      email,
      link
    };
    return (
      <div>
        {username ? (
          <User user={UserInfo} />
        ) : (
          <Grid>
            <Header>No User Was Found. Try Again.</Header>
          </Grid>
        )}
      </div>
    );
  }
}
