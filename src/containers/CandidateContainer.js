import { connect } from "react-redux";
import Candidate from "../components/Candidate.jsx";
import { updateCandidate } from "../actions";

const mapStateToProps = state => ({
  candidates: state.candidates.items,
  detailMode: state.candidates.detailMode
});

const mapDispatchToProps = dispatch => ({
  updateCandidate: data => {
    dispatch(updateCandidate(data));
  },
});

const CandidateContainer = connect(mapStateToProps, mapDispatchToProps)(Candidate);

export default CandidateContainer;
