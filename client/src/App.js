import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// Routes
import Home from "./components/routes/Home";
import Login from "./components/routes/Login";
import Error from "./components/routes/Error";

// Utils
import { isLoggedIn } from "./utils/Login";

// Components
import { RestrictedRoute, PrivateRoute } from "./components/SpecialRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer";
import Dashboard from "./components/routes/Dashboard";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };

    isLoggedIn().then((login) => this.setState({ isLoggedIn: login }));

    this.updateIsLoggedIn = this.updateIsLoggedIn.bind(this);

    //TODO try adding a spinner until loaded
  }

  updateIsLoggedIn(update) {
    this.setState({
      isLoggedIn: update,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Navbar
          login={this.state.isLoggedIn}
          onLogout={this.updateIsLoggedIn}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <RestrictedRoute
            exact
            path="/login"
            component={Login}
            isLoggedIn={this.state.isLoggedIn}
            onLogin={this.updateIsLoggedIn}
          />
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
            isLoggedIn={this.state.isLoggedIn}
          />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
