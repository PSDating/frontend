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
import rabobankCodeImage from "../../img/shadow-rabobank-code.png";
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

    this.authorizeAccount = this.authorizeAccount.bind(this);
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

  authorizeAccount(event) {
    this.props.authorizeAccount(this.state);
    event.preventDefault();
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
      <Grid
        style={{ height: '100%' }}
        textAlign='center'
      >
        <Grid.Column style={{ maxWidth: 650 }}>
          <form className="ui form">
            <div className="field">
              <Dropdown placeholder='Choose your bank...' value={this.state.bankName} onChange={this.updateBank} search selection options={[{ key: 'RB', value: 'RABO', text: 'Rabobank' }]} />
            </div>
            <div className="field">
              <Input icon="credit card" iconPosition="left" value={this.state.bankAccountNumber} onChange={this.updateBankNumber} placeholder='Banknumber' />
            </div>
            <div className="field">
              <Input icon="id card outline" iconPosition="left" value={this.state.bankCardNumber} onChange={this.updateCardNumber} placeholder='Cardnumber' />
            </div>
            <div className="field">
              <img className={this.state.bankName == 'RABO' ? 'shadow-rabobank-image' : 'hidden'} src={rabobankCodeImage} />
            </div>
            <Button className="fs-button bank-register-button" color='red' onClick={this.authorizeAccount}>Authenticate</Button>
          </form>
        </Grid.Column>
      </Grid>
    </div>
  }
}

Bank.propTypes = {
  user: PropTypes.object
};

export default Bank;
