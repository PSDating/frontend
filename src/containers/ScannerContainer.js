import { connect } from "react-redux";
import Scanner from "../components/Scanner.jsx";
import { scannerAuthorize, fetchRecommendations } from "../actions";

const mapStateToProps = state => ({
  image: state.scanner.image,
  authorized: state.scanner.authorized,
  candidates: state.candidates
});


const mapDispatchToProps = dispatch => ({
  requestScannerAuthorize: () => {
    dispatch(scannerAuthorize());
  },
  requestRecommendations: () => {
    dispatch(fetchRecommendations());
  }
});


const ScannerContainer = connect(mapStateToProps, mapDispatchToProps)(Scanner);

export default ScannerContainer;
