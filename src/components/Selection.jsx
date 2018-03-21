import React from "react";
import { Grid } from "semantic-ui-react";
import CandidateContainer from "../containers/CandidateContainer.js";
import PreferencesContainer from "../containers/PreferencesContainer.js";

const Selection = () => (
  <Grid centered stackable columns={2}>
    <Grid.Column>
      <CandidateContainer />
    </Grid.Column>
    <Grid.Column>
      <PreferencesContainer />
    </Grid.Column>
  </Grid>
)

export default Selection;
