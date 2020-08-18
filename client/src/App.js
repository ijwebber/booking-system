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
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, //TODO change back to the function call and fix the api
    };
  }

  /*
  componentDidMount() { // TODO figure out what to do with the promise and what that means
    console.log(isLoggedIn());
    this.setState({ isLoggedIn: isLoggedIn() });
  }*/

  updateIsLoggedIn(update) {
    this.setState({
      isLoggedIn: update,
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar isLoggedIn={this.state.isLoggedIn} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/login"
            render={() => <Login onLogin={this.updateIsLoggedIn} />}
          />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

/*
<PrivateRoute
            path="/tutor"
            component={TutorHome}
            loggedIn={this.state.isLoggedIn}
          />*/
