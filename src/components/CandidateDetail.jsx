import React from "react";
import { Container, Button, Header, Card, Input, Icon, Image, Grid } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";

const CandidateDetail = ({ candidate, cancelDetailMode }) => {
  if (!candidate) {
    return (
      <Redirect
        to={{
          pathname: "/selection"
        }}
      />
    );
  }
  return (
    <div>
      <Header as='h2'>{candidate.companyName}</Header>
      <Image className="candidate-image" src={candidate.logoUrl} />
      <br/>
      <p>We think you are a match made in heaven! You can reach out to this company by dialing the following number:</p>
      <br/>
      <Input icon='phone' iconPosition='left' value={candidate.phonenumber} />
      <br/>
      <Input icon='car' iconPosition='left' value={candidate.zipCity} />
      <br/>
      <br/>
      <br/>
      <Button className="ui button fs-button" onClick={e => cancelDetailMode() } color="red" type="submit">Go back</Button>
    </div>
    
  )
};

export default CandidateDetail;