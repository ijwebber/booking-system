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
        className="d-flex align-items-center flex-column justify-content-center h-100"
        id="header"
      >
        <div className="login-box">
          <form>
            <h1 className="login-box-title">LOGIN</h1>
            <div className="form-group">
              <label className="login-box-subtitle">EMAIL</label>
              <input
                className="form-control login-box-input"
                type="text"
                name="email"
              />
            </div>
            <div className="form-group">
              <label className="login-box-subtitle">PASSWORD</label>
              <input
                className="form-control login-box-input"
                type={this.state.isPasswordVisible ? "text" : "password"}
                name="password"
              />
              <img
                src={this.state.isPasswordVisible ? openEye : closedEye}
                alt="Reveal Password"
                className="eye-icon"
                onClick={this.toggleViewPassword}
              />
            </div>
            <div className="form-group">
              <button className="btn login-box-button">SUBMIT</button>
            </div>
            <div className="form-group">
              <a className="login-box-forgot" href="/forgot">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
