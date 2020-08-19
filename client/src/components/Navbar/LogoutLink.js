import React, { Component } from "react";
import { logout } from "../../utils/Login";
import { Redirect } from "react-router-dom";

export default class LogoutLink extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    logout();
    this.setState({ clicked: true });
    this.props.onLogout(false);
  }

  defaultDisplay() {
    return (
      <div className="ml-3">
        <span onClick={this.handleClick} className="a-custom">
          LOGOUT
        </span>
      </div>
    );
  }

  render() {
    return this.state.clicked ? (
      <Redirect to="/login" />
    ) : (
      this.defaultDisplay()
    );
  }
}
