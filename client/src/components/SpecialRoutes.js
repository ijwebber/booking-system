import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export const RestrictedRoute = ({
  component: Component,
  onLogin,
  isLoggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoggedIn ? (
          <Component {...props} onLogin={onLogin} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
};
