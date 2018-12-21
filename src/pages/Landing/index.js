import * as React from "react";
import api from "../../api";

import User from "../../components/User";

class Landing extends React.Component {
  state = { user: null };

  componentDidMount = async () => {
    // await api.get("/users/featured");

    const user = {
      username: "username",
      bio: "myBio",
      first_name: "firstName",
      last_name: "lastName",
      email: "email",
      link: "myLink"
    };

    this.setState({ user });
  };

  render = () => (
    <div>{this.state.user && <User user={this.state.user} />}</div>
  );
}

export default Landing;
