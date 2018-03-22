import React from "react";
import { Container, Header, Input, Button, Image, Label } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import logoImage from "../../img/logo.png";

const Scanner = ({image, authorized, candidates, requestScannerAuthorize, requestRecommendations}) => {
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
      <Image className="shadow-rabobank-image" src={image}></Image>
      <div className="rabobank-code-input">
      <Input className="full-width" icon="hashtag" iconPosition="left" placeholder='Password' type="password" />
      </div>
      <Button className="fs-button bank-scanner-button" color='red' onClick={e => {
        e.preventDefault();
        requestScannerAuthorize();
        requestRecommendations();
      }}>Authorize</Button>
    </div>
  )
}

export default Scanner;
