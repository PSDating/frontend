import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Container, Header, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../css/knapsack.css";
import ErrorContainer from "../containers/ErrorContainer.js";
import TaskContainer from "../containers/TaskContainer.js";
import ControlsContainer from "../containers/ControlsContainer.js";
import SolutionContainer from "../containers/SolutionContainer.js";

const App = ({ store }) => (
  <Provider store={store}>
    <Container>
      <Header as="h1">Knapsack Service Optimizer</Header>
      <ErrorContainer />
      <Divider />
      <TaskContainer />
      <Divider />
      <ControlsContainer />
      <SolutionContainer />
    </Container>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
