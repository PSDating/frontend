import React from "react";
import PropTypes from "prop-types";
import { Container, Label, Button, Divider } from "semantic-ui-react";

const Message = ({ message, requestMessage }) => {
  const labelContent = message || "No message";
  return (
    <Container>
      <Label>{labelContent}</Label>
      <Divider />
      <Button onClick={e => {
        e.preventDefault();
        requestMessage();
      }}>Fetch</Button>
    </Container>
  );
};

Message.propTypes = {
  message: PropTypes.string,
  fetchMessage: PropTypes.func
};

export default Message;
