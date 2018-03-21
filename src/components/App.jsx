import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Container, Header, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../../css/psdating.css";

const App = ({ store }) => (
  <Provider store={store}>
    <Container>
      <Header as="h1">PSDating</Header>
      <Divider />
    </Container>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
