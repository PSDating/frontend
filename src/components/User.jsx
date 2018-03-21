import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";

const User = ({ user }) => {
  const username = user || "Not logged in";
  return <Container>{username}</Container>;
};

User.propTypes = {
  user: PropTypes.string
};

export default User;
