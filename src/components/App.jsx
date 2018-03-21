import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Menu, Container, Header, Divider } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import MessageContainer from "../containers/MessageContainer.js";
import MatchesContainer from "../containers/MatchesContainer.js";
import UserContainer from "../containers/UserContainer.js";
import Selection from "../components/Selection.jsx";
import RegistrationContainer from "../containers/RegistrationContainer.js";
import "semantic-ui-css/semantic.min.css";
import "../../css/psdating.css";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Container>
        <Header as="h1">PSDating</Header>
        <Menu>
          <Menu.Item as={Link} to="/message">Message</Menu.Item>
          <Menu.Item as={Link} to="/matches">Matches</Menu.Item>
          <Menu.Item as={Link} to="/user">User</Menu.Item>
          <Menu.Item as={Link} to="/selection">Selection</Menu.Item>
          <Menu.Item as={Link} to="/register">Register</Menu.Item>
        </Menu>
        <Route path="/message" component={MessageContainer} />
        <Route path="/matches" component={MatchesContainer} />
        <Route path="/user" component={UserContainer} />
        <Route path="/selection" component={Selection} />
        <Route path="/register" component={RegistrationContainer} />
      </Container>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
