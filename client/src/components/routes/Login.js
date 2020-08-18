import React, { Component } from "react";
import "./login.styles.css";
import closedEye from "../../assets/closed-eye.svg";
import openEye from "../../assets/eye.svg";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: false,
    };

    this.toggleViewPassword = this.toggleViewPassword.bind(this);
  }

  toggleViewPassword() {
    this.setState((state) => ({
      isPasswordVisible: !state.isPasswordVisible,
    }));
  }

  //TODO add onChange so that the variables sync up with the state

  render() {
    return (
      <div
        class="d-flex align-items-center flex-column justify-content-center h-100"
        id="header"
      >
        <div class="login-box">
          <form>
            <h1 class="login-box-title">LOGIN</h1>
            <div class="form-group">
              <label class="login-box-subtitle">EMAIL</label>
              <input
                class="form-control login-box-input"
                type="text"
                name="email"
              />
            </div>
            <div class="form-group">
              <label class="login-box-subtitle">PASSWORD</label>
              <input
                class="form-control login-box-input"
                type={this.state.isPasswordVisible ? "text" : "password"}
                name="password"
              />
              <img
                src={this.state.isPasswordVisible ? openEye : closedEye}
                alt="Reveal Password"
                class="eye-icon"
                onClick={this.toggleViewPassword}
              />
            </div>
            <div class="form-group">
              <button class="btn login-box-button">SUBMIT</button>
            </div>
            <div class="form-group">
              <a class="login-box-forgot" href="/forgot">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
