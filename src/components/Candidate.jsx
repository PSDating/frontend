import React from "react";
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

const Candidate = ({ candidate, updateCandidate }) => (
  <Card>
    <Image src={candidate.logoUrl} />
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

export default Candidate;
