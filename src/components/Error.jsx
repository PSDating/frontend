import React from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";

const Error = ({ message }) => {
  if (message) {
    return (
      <Message negative>
        <p>{ message }</p>
      </Message>
    )
  }

  return null;
};

Error.propTypes = {
  message: PropTypes.string
};

export default Error;
