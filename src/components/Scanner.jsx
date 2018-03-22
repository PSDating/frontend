import React from "react";
import { Container, Header, Input, Button, Image, Label } from "semantic-ui-react";

const Scanner = ({ image }) => (
  <Container>
    <Header as="h2">Scan</Header>
    <Image className="scanner-image" src={image}></Image>
    <Label>Enter password</Label>
    <Input placeholder='Search...' type="password" />
    <Button>Authorize</Button>
  </Container>
)

export default Scanner;
