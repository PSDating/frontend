import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Container, Header, Divider } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import MessageContainer from "../containers/MessageContainer.js";
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
        <ul>
          <li><Link to="/message">Message</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/selection">Selection</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
        <Divider />
        <Route path="/message" component={MessageContainer} />
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
