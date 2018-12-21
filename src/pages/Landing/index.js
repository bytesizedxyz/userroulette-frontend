import * as React from "react";
import api from "../../api";

import User from "../../components/User";

class Landing extends React.Component {
  state = { user: null };

  componentDidMount = async () => {
    const userResponse = await api.get("/users/featured");
    const foundUser = userResponse.data[0];
    console.log(foundUser);
    const user = {
      username: foundUser.username,
      bio: foundUser.bio,
      first_name: foundUser.first_name,
      last_name: foundUser.last_name,
      email: foundUser.email,
      link: foundUser.link
    };
    this.setState({ user });
  };

  render = () => <div>{this.state.user && <User user={this.state.user} />}</div>;
}

export default Landing;
