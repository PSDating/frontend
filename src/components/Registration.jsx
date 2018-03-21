import React from "react";
import PropTypes from "prop-types";
import { Grid, Container, Label, Button, Divider } from "semantic-ui-react";

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: "",
      username: "",
      password: ""
    };

    this.attemptLogin = props.attemptLogin;

    this.updateCompany = this.updateCompany.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);

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

  handleSubmit(event) {
    // Avoid reloading the page.
    event.preventDefault();
    this.attemptLogin(this.state);
  }

  render() {
    return (
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 650 }}>
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="field">
              <label>Company Name</label>
              <input type="text" name="company-name" value={this.state.company} onChange={this.updateCompany} placeholder="Company Name" />
            </div>
            <div className="field">
              <label>Username</label>
              <input type="text" name="user-name" value={this.state.username} onChange={this.updateUsername} placeholder="Username" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" name="password" value={this.state.password} onChange={this.updatePassword} placeholder="Password" />
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" tabIndex="0" className="hidden" />
                <label>I agree to the Terms and Conditions</label>
              </div>
            </div>
            <button className="ui button" type="submit">Register</button>
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