import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu, Button } from "semantic-ui-react";
import api from "../../api";

class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    const { history } = this.props;
    history.push(`/${name}`);
  };

  getRandomUser = async () => {
    const { history } = this.props;
    const randomUser = await api.get("/users/random");
    if (!randomUser.data.user.length) {
      return;
    } else {
      const username = randomUser.data.user[0].userName;
      history.push(`/${username}`);
    }
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="large">
        <Menu.Item header href="/">
          User Roulette
        </Menu.Item>
        <Menu.Item
          name="userProfile"
          active={activeItem === "userProfile"}
          onClick={this.handleItemClick}
        />
        <Menu.Item name="signUp" active={activeItem === "signUp"} onClick={this.handleItemClick} />
        <Menu.Item name="randomUser" onClick={this.getRandomUser} />
      </Menu>
    );
  }
}

export default withRouter(Header);
