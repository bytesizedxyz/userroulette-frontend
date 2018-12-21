import React, { Component } from "react";
import User from "../../components/User";

export default class Profile_Page extends Component {
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
    console.log("this is a user");
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
