import { connect } from "react-redux";
import Registration from "../components/Registration.jsx";
import { login } from "../actions/login";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  attemptLogin: (data) => {
    dispatch(login(data));
  }
});

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default RegistrationContainer;
