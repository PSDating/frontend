import { connect } from "react-redux";
import Error from "../components/Error.jsx";

const mapStateToProps = state => ({
  message: state.error,
});

const ErrorContainer = connect(mapStateToProps)(Error);

export default ErrorContainer;
