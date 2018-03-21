import React from "react";
import { Container, Segment, Item, Card, Image } from "semantic-ui-react";

const CategoryMatches = ({ category, matches }) => (
  matches ?
    <Segment>
      <h2>{category}</h2>
      <Card.Group itemsPerRow={4}>
        {
          matches.map(match =>
            <Card key={match.companyName} >
              <Image src={match.logoUrl} />
              <Card.Content>
                <Card.Header>{match.companyName}</Card.Header>
              </Card.Content>
            </Card>
          )
        }
      </Card.Group>
    </Segment>
    : <div></div>
)

const Matches = ({ categories, matches }) => (
  <Container>
    {
      categories.map(category => (<CategoryMatches key={category.id} category={category.label} matches={matches[category.id]} />))
    }
  </Container>
)

export default Matches;
