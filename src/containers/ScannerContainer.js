import { connect } from "react-redux";
import Scanner from "../components/Scanner.jsx";

const mapStateToProps = state => ({
  image: state.scanner
});

const ScannerContainer = connect(mapStateToProps)(Scanner);

export default ScannerContainer;
