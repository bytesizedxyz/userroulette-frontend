import React, { Component } from "react";
import User from "../../components/User";

export default class Profile extends Component {
  state = {
    username: "username",
    bio: "myBio",
    first_name: "firstName",
    last_name: "lastName",
    email: "email",
    link: "myLink"
  };

  componentDidMount() {
    this.fetchUser();
  }
  fetchUser = () => {
    const location = this.props.location.pathname;
    console.log(this.props.location);
    const user = location.split("/")[1];
    console.log(user);

    //make request to database with username
    //set state with the user that was requested
    this.setState({ username: "AwesomeUserName" });
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
    return <User user={UserInfo} />;
  }
}
