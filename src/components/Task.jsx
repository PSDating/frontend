import React from "react";
import PropTypes from "prop-types";
import { Container, Input, Button, Header } from "semantic-ui-react";
import { arrayRange } from "../utils.js";

const Item = () => (
  <Container className="itemContainer">
    <Input label="Weight" name="weight" className="weightInput" />
    <Input label="Value" name="value" />
  </Container>
);

const Task = ({ taskId, nItems, increment, decrement }) => {
  const items = arrayRange(nItems).map(i => <Item key={i} />);

  return (
    <Container>
      <Header as="h2">Task</Header>
      <Container className={taskId === null ? "" : "disabled"}>
        <Input label="Capacity" name="capacity" className="capacityInput" />
        { items }
        <Container className="buttonsContainer">
          <Button onClick={e => { e.preventDefault(); increment(); }}>+</Button>
          <Button onClick={e => { e.preventDefault(); decrement(); }}>-</Button>
        </Container>
      </Container>
    </Container>
  )
};

Task.propTypes = {
  taskId: PropTypes.string,
  nItems: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default Task;
