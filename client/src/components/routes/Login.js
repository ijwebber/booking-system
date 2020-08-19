import React, { Component } from "react";
import "./login.styles.css";
import closedEye from "../../assets/closed-eye.svg";
import openEye from "../../assets/eye.svg";
import { login } from "../../utils/Login";
import { WarningAlert } from "../Alert/Alert";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isPasswordVisible: false,
      errors: {},
    };

    this.toggleViewPassword = this.toggleViewPassword.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleViewPassword() {
    this.setState((state) => ({
      isPasswordVisible: !state.isPasswordVisible,
    }));
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    login(this.state.email, this.state.password).then((res) => {
      if (res.success) {
        this.props.onLogin(true);
        this.setState({ errors: {} });
      } else {
        this.setState({ errors: res.errors });
      }
    });
  }

  render() {
    const alerts = Object.values(this.state.errors).map((error) => (
      <WarningAlert key={error} title="" text={error}></WarningAlert>
    ));

    return (
      <div>
        <div
          className="d-flex align-items-center flex-column justify-content-center h-100"
          id="header"
        >
          <div className="login-box">
            <form onSubmit={this.handleSubmit}>
              <h1 className="login-box-title">LOGIN</h1>
              <div className="form-group">
                <label className="login-box-subtitle">EMAIL</label>
                <input
                  className="form-control login-box-input"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="login-box-subtitle">PASSWORD</label>
                <input
                  className="form-control login-box-input"
                  type={this.state.isPasswordVisible ? "text" : "password"}
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
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
          {alerts}
        </div>
      </div>
    );
  }
}
