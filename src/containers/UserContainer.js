import { connect } from "react-redux";
import User from "../components/User.jsx";

const mapStateToProps = state => ({
  user: state.user,
});

const UserContainer = connect(mapStateToProps)(User);

export default UserContainer;
