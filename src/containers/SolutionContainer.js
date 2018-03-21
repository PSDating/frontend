import { connect } from "react-redux";
import Solution from "../components/Solution.jsx";

const mapStateToProps = state => ({
  solution: state.solution,
});

const SolutionContainer = connect(mapStateToProps)(Solution);

export default SolutionContainer;
