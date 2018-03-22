import React from "react";
import { Container, Header, Input, Button, Image, Label } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
class Scanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authorized: false};
  }

  render() {
    if (this.state.authorized) {
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
        <Image className="scanner-image" src={this.props.image}></Image>
        <Label>Enter password</Label>
        <Input placeholder='Search...' type="password" />
        <Button onClick={e => {
          e.preventDefault();
          this.setState({ authorized: true })
        }}>Authorize</Button>
      </Container>
    )
  }

}

export default Scanner;
