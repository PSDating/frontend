import { connect } from "react-redux";
import Task from "../components/Task.jsx";
import { incrementNItems, decrementNItems } from "../actions";

const mapStateToProps = state => ({
  taskId: state.taskId,
  nItems: state.nItems,
});

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(incrementNItems());
  },
  decrement: () => {
    dispatch(decrementNItems());
  },
});

const TaskContainer = connect(mapStateToProps, mapDispatchToProps)(Task);

export default TaskContainer;
