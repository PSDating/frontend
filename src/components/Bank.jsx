import React from "react";
import PropTypes from "prop-types";
import { Container, Button, Grid, Input, Dropdown, Icon } from "semantic-ui-react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import logoImage from "../../img/logo.png";
class Bank extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            bankName: "",
            bankAccountNumber: "",
            bankCardNumber: ""
        };

        this.updateBank = this.updateBank.bind(this)
        this.updateBankNumber = this.updateBankNumber.bind(this)
        this.updateCardNumber = this.updateCardNumber.bind(this)
    }

    updateBank(event, data) {
        this.setState({ bankName: data.value })
    }

    updateBankNumber(event) {
        this.setState({ bankAccountNumber: event.target.value })
    }

    updateCardNumber(event) {
        this.setState({ bankCardNumber: event.target.value })
    }

    render() {
        if (this.props.bank) {
            return (
                <Redirect
                    to={{
                        pathname: "/scanner"
                    }} />
            );
        }
        return <div>
            <img className="logo-intro logo-register logo-bank" src={logoImage} />
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <div className="bank-selector-container">
                            <Icon name="building" />
                            <Dropdown className="bank-dropdown" iconPosition="left" placeholder='Choose your bank...' value={this.state.bankName} onChange={this.updateBank} search selection options={[{ key: 'RB', value: 'RABO', text: 'Rabobank' }]} />
                        </div>
                        <Input className="full-width" icon="credit card" iconPosition="left" value={this.state.bankAccountNumber} onChange={this.updateBankNumber} placeholder='Banknumber' />
                        <Input className="full-width" icon="credit card outline" iconPosition="left" value={this.state.bankCardNumber} onChange={this.updateCardNumber} placeholder='Cardnumber' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Button className="fs-button bank-register-button" color='red' onClick={(e) => { console.log(this.state); this.props.authorizeAccount(this.state) }}>Authenticate</Button>
        </div>
    }
}

Bank.propTypes = {
    user: PropTypes.object
};

export default Bank;
