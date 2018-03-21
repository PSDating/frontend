import { connect } from "react-redux";
import Message from "../components/Message.jsx";
import { fetchMessage } from "../actions";

const mapStateToProps = state => ({
  message: state.message
});

const mapDispatchToProps = dispatch => ({
  requestMessage: () => {
    dispatch(fetchMessage());
  },
});

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;
