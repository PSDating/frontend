import React from "react";
import PropTypes from "prop-types";
import { Container, Button, Grid } from "semantic-ui-react";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

const Intro = () => {
  return <Container>
      <Grid>
        <Grid.Row>
            <Grid.Column width={16}>
                <Button as={Link} to="/register" className="fs-button" color='green'>Register</Button>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={16}>
                <Button className="fs-button" color='green'>Login</Button>
            </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>;
};

Intro.propTypes = {}

export default Intro;
