import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

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
        <Menu.Item header href="/">
          User Roulette
        </Menu.Item>
        <Menu.Item
          name="userProfile"
          active={activeItem === "userProfile"}
          onClick={this.handleItemClick}
        />
        <Menu.Item name="signUp" active={activeItem === "signUp"} onClick={this.handleItemClick} />
      </Menu>
    );
  }
}

export default withRouter(Header);
