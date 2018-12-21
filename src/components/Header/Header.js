import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Icon, Menu, Grid } from "semantic-ui-react";
import Gravatar from "react-gravatar";

class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    const { history } = this.props;
    history.push(`/${name}`);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="large">
        <Menu.Item header>User Roulette</Menu.Item>
        <Menu.Item
          name="userProfile"
          active={activeItem === "userProfile"}
          onClick={this.handleItemClick}
        />
        <Menu.Item name="signUp" active={activeItem === "signUp"} onClick={this.handleItemClick} />
        <Menu.Item position="right">
          <Gravatar email={"billgates@microsoft.com"} />
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(Header);
