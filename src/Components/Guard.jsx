import React from "react";
import { Link, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Link to="/Login" />
    }
  />
);

export default PrivateRoute;
