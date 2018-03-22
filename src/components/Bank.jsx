import React from "react";
import PropTypes from "prop-types";
import { Container, Button, Grid, Input, Dropdown } from "semantic-ui-react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

class Bank extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            bankName: "",
            banknumber: "",
            bankCardNumber: ""
        };

        this.updateBank = this.updateBank.bind(this)
        this.updateBankNumber = this.updateBankNumber.bind(this)
        this.updateCardNumber = this.updateCardNumber.bind(this)
    }

    updateBank(event, data) {
        this.setState({bankName: data.value})
    }

    updateBankNumber(event) {
        this.setState({banknumber: event.target.value})
    }

    updateCardNumber(event) {
        this.setState({bankCardNumber: event.target.value})
    }

    render() {
        if (this.props.bank) {
            return (
                <Redirect
                to={{
                    pathname: "/scanner"
                }}/>
            );
        }
        return <Container>
      <Grid>
        <Grid.Row>
            <Grid.Column width={16}>
                <Dropdown placeholder='Choose your bank...' value={ this.state.bankName } onChange={ this.updateBank } search selection options={[{key: 'RB', value: 'Rabobank', text: 'Rabobank'}]} />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={10}>
                <Input className="full-width" value={ this.state.banknumber } onChange={ this.updateBankNumber } placeholder='Banknumber' />
            </Grid.Column>
            <Grid.Column width={6}>
                <Input className="full-width" value={ this.state.bankCardNumber } onChange={ this.updateCardNumber } placeholder='Cardnumber' />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={16}>
                <Button className="fs-button" color='green' onClick={(e) => { console.log(this.state); this.props.authorizeAccount(this.state)}}>Authenticate</Button>
            </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container> 
    }
}

Bank.propTypes = {
  user: PropTypes.object
};

export default Bank;
