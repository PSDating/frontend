import React from "react";
import { Container, Card, Icon, Image, Grid } from 'semantic-ui-react'
import logoImage from "../../img/logo.png";

const Candidate = ({ candidates, updateCandidate }) => {
  if (candidates.length === 0) {
    return (
      <div>
          <img className="logo-intro logo-bank" src={logoImage} />
      </div>
    )
  }

  const candidate = candidates[0];
  return (
    <Card className="candidate-card">
      <Image className="candidate-image" src={candidate.logoUrl} />
      <Card.Content>
        <Card.Header>
          {candidate.companyName}
        </Card.Header>
        <Card.Meta>
          {candidate.zipCity}
        </Card.Meta>
        <Card.Description>
          {candidate.address}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon className='remove-icon' name='remove' size='huge' onClick={e => updateCandidate(false)} />
        <Icon className='checkmark-icon' name='checkmark' size='huge' onClick={e => updateCandidate(true)} />
      </Card.Content>
    </Card>
  )
};

export default Candidate;
