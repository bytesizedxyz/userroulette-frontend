import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Grid } from "semantic-ui-react";
import Gravatar from "react-gravatar";

export default class MenuExampleHeader extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item header>User Roulette</Menu.Item>
        <Menu.Item
          name="userProfile"
          active={activeItem === "userProfile"}
          onClick={this.handleItemClick}
        />
        <Menu.Item name="signUp" active={activeItem === "signUp"} onClick={this.handleItemClick} />
        <Gravatar email={"billgates@microsoft.com"} />
      </Menu>
    );
  }
}
