import React from "react";
import { Grid } from "semantic-ui-react";
import Candidate from "./Candidate.jsx";
import PreferencesContainer from "../containers/PreferencesContainer.js";

const Selection = () => (
  <Grid centered stackable columns={2}>
    <Grid.Column>
      <Candidate />
    </Grid.Column>
    <Grid.Column>
      <PreferencesContainer />
    </Grid.Column>
  </Grid>
)

export default Selection;
