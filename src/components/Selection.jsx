import React from "react";
import { Grid } from "semantic-ui-react";
import Candidate from "./Candidate.jsx";
import Preferences from "./Preferences.jsx";

const Selection = () => (
  <Grid centered stackable columns={2}>
    <Grid.Column>
      <Candidate />
    </Grid.Column>
    <Grid.Column>
      <Preferences />
    </Grid.Column>
  </Grid>
)

export default Selection;
