import React from "react";
import { Container, Header, Input, Button, Image, Label } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

const Scanner = ({image, authorized, requestScannerAuthorize}) => {
  const shouldToGoSelection = authorized;
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
    <Container>
      <Header as="h2">Scan</Header>
      <Image className="scanner-image" src={image}></Image>
      <Label>Enter password</Label>
      <Input placeholder='Search...' type="password" />
      <Button onClick={e => {
        e.preventDefault();
        requestScannerAuthorize();
      }}>Authorize</Button>
    </Container>
  )
}

export default Scanner;
