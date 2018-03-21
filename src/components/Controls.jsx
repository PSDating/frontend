import React from "react";
import PropTypes from "prop-types";
import { Container, Button, Divider } from "semantic-ui-react";
import { nodeListToArray } from "../utils.js";
import validateParameters from "../validation.js";

const getParameters = () => {
  const capacity = parseInt(document.querySelector("input[name=capacity]").value);
  const weights = nodeListToArray(document.querySelectorAll("input[name=weight]")).map(input => parseInt(input.value));
  const values = nodeListToArray(document.querySelectorAll("input[name=value]")).map(input => parseInt(input.value));

  return {
    capacity,
    weights,
    values
  };
}

const newTask = ({ capacity, weights, values }) => {
  const task = {
    capacity,
    items: []
  };

  for (let i = 0; i < weights.length; i++) {
    task.items.push({
      weight: weights[i],
      value: values[i]
    });
  }

  return task;
};

const Controls = ({ taskId, solution, submit, fetchSolution, showError, clearError }) => {
  if (taskId === null) {
    return <Button onClick={e => {
      e.preventDefault();
      clearError();
      const parameters = getParameters();
      const error = validateParameters(parameters);
      if (error) {
        showError(error);
        return;
      }
      submit(newTask(parameters));
    }}>Submit to optimizer</Button>;
  }

  if (solution === null) {
    return <Button onClick={e => {
      e.preventDefault();
      clearError();
      fetchSolution(taskId);
    }}>Fetch solution</Button>;
  }

  return null;
};

export default Controls;
