import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";

const User = ({ user }) => {
  const username = user ? user.username : "Not logged in";
  return <Container>{username}</Container>;
};

User.propTypes = {
  user: PropTypes.object
};

export default User;
