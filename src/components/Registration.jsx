import React from "react";
import PropTypes from "prop-types";
import { Grid, Container, Label, Button, Divider, Input, Header, Checkbox } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import logoImage from "../../img/logo.png";

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: "",
      username: "",
      password: "",
      acceptedTermsOfAgreement: false
    };

    this.attemptLogin = props.attemptLogin;

    this.updateCompany = this.updateCompany.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateTermsOfAgreement = this.updateTermsOfAgreement.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateCompany(event) {
    this.setState({ company: event.target.value });
  }

  updateUsername(event) {
    this.setState({ username: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  updateTermsOfAgreement(event, data) {
    this.setState({ acceptedTermsOfAgreement: data.checked })
  }

  handleSubmit(event) {
    // Avoid reloading the page.
    event.preventDefault();
    this.attemptLogin(this.state);
  }

  render() {
    if (this.props.user && this.props.user.loggedIn) {
      return (
        <Redirect
          to={{
            pathname: "/bank"
          }}
        />
      );
    }
    return (
      <Grid
        style={{ height: '100%' }}
        textAlign='center'
      >
        <Grid.Column style={{ maxWidth: 650 }}>
          <img className="logo-intro logo-register" src={logoImage} />

          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="field">
              <Input type="text" icon="briefcase" iconPosition="left" name="company-name" value={this.state.company} onChange={this.updateCompany} placeholder="Company Name" />
            </div>
            <div className="field">
              <Input type="text" icon="user" iconPosition="left" name="user-name" value={this.state.username} onChange={this.updateUsername} placeholder="Username" />
            </div>
            <div className="field">
              <Input icon="hashtag" iconPosition="left" type="password" name="password" value={this.state.password} onChange={this.updatePassword} placeholder="Password" />
            </div>
            <div className="field">
              <Checkbox label='I agree to the Terms and Conditions' checked={this.state.acceptedTermsOfAgreement} onChange={this.updateTermsOfAgreement}/>
            </div>
            <Button className="ui button fs-button button-register-register" color="red" type="submit">Register</Button>
          </form>
        </Grid.Column>
      </Grid>
    );
  }
}

Registration.propTypes = {
  attemptLogin: PropTypes.func
};

export default Registration;