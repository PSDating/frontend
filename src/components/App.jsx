import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Menu, Container, Header, Divider } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute.jsx"
import MessageContainer from "../containers/MessageContainer.js";
import MatchesContainer from "../containers/MatchesContainer.js";
import IntroContainer from "../containers/IntroContainer.js";
import BankContainer from "../containers/BankContainer.js";
import Selection from "../components/Selection.jsx";
import RegistrationContainer from "../containers/RegistrationContainer.js";
import ScannerContainer from "../containers/ScannerContainer.js";
import "semantic-ui-css/semantic.min.css";
import "../../css/psdating.css";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Container>
        <Header as="h1">PSDating</Header>
        <Menu>
          <Menu.Item as={Link} to="/register">Register</Menu.Item>
          <Menu.Item as={Link} to="/scanner">Scanner</Menu.Item>
          <Menu.Item as={Link} to="/selection">Selection</Menu.Item>
          <Menu.Item as={Link} to="/matches">Matches</Menu.Item>
        </Menu>
        <Route exact path="/" component={IntroContainer} />
        <Route path path="/bank" component={BankContainer} />
        <Route path="/message" component={MessageContainer} />
        <Route path="/scanner" component={ScannerContainer} />
        <Route path="/register" component={RegistrationContainer} />
        <Route path="/matches" component={MatchesContainer} />
        <Route path="/selection" component={Selection} />
      </Container>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
