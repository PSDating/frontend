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
import RegistrationContainer from "../containers/RegistrationContainer.js";
import ScannerContainer from "../containers/ScannerContainer.js";
import CandidateContainer from "../containers/CandidateContainer.js";
import "semantic-ui-css/semantic.min.css";
import "../../css/psdating.css";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Container className="main-container">
        <Route exact path="/" component={IntroContainer} />
        <Route path="/register" component={RegistrationContainer} />
        <Route path="/bank" component={BankContainer} />
        <Route path="/scanner" component={ScannerContainer} />
        <Route path="/selection" component={CandidateContainer} />
      </Container>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
