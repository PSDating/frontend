import { connect } from "react-redux";
import CandidateDetail from "../components/CandidateDetail.jsx";
import { cancelDetailModeAction } from "../actions";

const mapStateToProps = state => ({
  candidate: state.candidates.detailMode
});

const mapDispatchToProps = dispatch => ({
  cancelDetailMode: () => {
    dispatch(cancelDetailModeAction());
  },
});

const CandidateDetailContainer = connect(mapStateToProps, mapDispatchToProps)(CandidateDetail);

export default CandidateDetailContainer;
