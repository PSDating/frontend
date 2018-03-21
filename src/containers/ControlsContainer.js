import { connect } from "react-redux";
import Controls from "../components/Controls.jsx";
import { submitTask, requestSolution, showError, clearError } from "../actions";

const mapStateToProps = state => ({
  taskId: state.taskId,
  solution: state.solution,
});

const mapDispatchToProps = dispatch => ({
  submit: task => {
    dispatch(submitTask(task));
  },
  fetchSolution: taskId => {
    dispatch(requestSolution(taskId));
  },
  showError: error => {
    dispatch(showError(error));
  },
  clearError: () => {
    dispatch(clearError());
  },
});

const ControlsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Controls,
);

export default ControlsContainer;
