import React from "react";
import { Container, Header, Input, Button, Image, Label, Grid } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import logoImage from "../../img/logo.png";

const Scanner = ({ image, authorized, candidates, requestScannerAuthorize, requestRecommendations }) => {
  const shouldToGoSelection = authorized && candidates.length !== 0;
  if (shouldToGoSelection) {
    return (
      <Redirect
        to={{
          pathname: "/selection"
        }}
      />
    )
  }

  return (
    <div>
      <img className="logo-intro logo-bank" src={logoImage} />
      <Grid
        style={{ height: '100%' }}
        textAlign='center'
      >
        <Grid.Column style={{ maxWidth: 650 }}>
          <form className="ui form">
            <div className="field">
              <Input icon="hashtag" iconPosition="left" placeholder='Password' type="password" />
            </div>
            <div className="field">
              <Image className="shadow-rabobank-image" src={image}></Image>
            </div>
            <Button className="fs-button bank-scanner-button" color='red' onClick={e => {
              e.preventDefault();
              requestScannerAuthorize();
              requestRecommendations();
            }}>Authorize</Button>
          </form>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Scanner;
