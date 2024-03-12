import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <lin to="/Login" />
    }
  />
);

export default PrivateRoute;
