import { connect } from "react-redux";
import Registration from "../components/Registration.jsx";
import { register } from "../actions/login";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  attemptLogin: (data) => {
    dispatch(register(data));
  }
});

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default RegistrationContainer;
