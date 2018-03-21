import React from "react";
import PropTypes from "prop-types";
import { Container, Header, Table } from "semantic-ui-react";

const Solution = ({ solution }) => {
  if (!solution) {
    return null;
  }

  if (solution.length === 0) {
    return <Container>No solution was found.</Container>;
  }

  const rows = solution.map(({ weight, value }, i) => (
    <Table.Row key={i}>
      <Table.Cell>{ weight }</Table.Cell>
      <Table.Cell>{ value }</Table.Cell>
    </Table.Row>
  ));

  return (
    <Container>
      <Header as="h2">Solution</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Weight</Table.HeaderCell>
            <Table.HeaderCell>Value</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { rows }
        </Table.Body>
      </Table>
    </Container>
  )
};

Solution.propTypes = {
  solution: PropTypes.array
};

export default Solution;
