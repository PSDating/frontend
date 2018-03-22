import React from "react";
import PropTypes from "prop-types";
import { Container, Button, Grid, Input, Dropdown } from "semantic-ui-react";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

const Bank = () => {
  return <Container>
      <Grid>
        <Grid.Row>
            <Grid.Column width={16}>
                <Dropdown placeholder='Choose your bank...' search selection options={[{key: 'RB', value: 'Rabobank', text: 'Rabobank'}]} />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={10}>
                <Input className="full-width" placeholder='Banknumber' />
            </Grid.Column>
            <Grid.Column width={6}>
                <Input className="full-width" placeholder='Cardnumber' />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={16}>
            <Button className="fs-button" color='green'>Authenticate</Button>
            </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>;
};

Bank.propTypes = {
  user: PropTypes.object
};

export default Bank;