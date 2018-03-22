import { connect } from "react-redux";
import Scanner from "../components/Scanner.jsx";
import { scannerAuthorize } from "../actions";

const mapStateToProps = state => ({
  image: state.scanner.image,
  authorized: state.scanner.authorized
});


const mapDispatchToProps = dispatch => ({
  requestScannerAuthorize: () => {
    dispatch(scannerAuthorize());
  },
});


const ScannerContainer = connect(mapStateToProps, mapDispatchToProps)(Scanner);

export default ScannerContainer;
