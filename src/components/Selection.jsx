import React from "react";
import { Grid } from "semantic-ui-react";
import CandidateContainer from "../containers/CandidateContainer.js";
import PreferencesContainer from "../containers/PreferencesContainer.js";

const Selection = () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <div className="candidate-column">
        <CandidateContainer />
      </div>
    </Grid.Column>
  </Grid>
)

export default Selection;
