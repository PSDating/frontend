import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, props: userData, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      userData && userData.loggedIn ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/register",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

ProtectedRoute.propTypes = {
  user: PropTypes.object
};

export default ProtectedRoute