import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

const Candidate = ({ candidate, updateCandidate }) => (
  <Card>
    <Image src={candidate.image} />
    <Card.Content>
      <Card.Header>
        {candidate.name}
      </Card.Header>
      <Card.Description>
        {candidate.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='remove' size='big' />
        <Icon name='checkmark' size='big' />
    </Card.Content>
  </Card>
)

export default Candidate;
