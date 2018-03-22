import { connect } from "react-redux";
import Matches from "../components/Matches.jsx";

const mapStateToProps = state => ({
    categories: state.categories,
    matches: state.matches
});

const mapDispatchToProps = dispatch => ({
});

const MatchesContainer = connect(mapStateToProps, mapDispatchToProps)(Matches);

export default MatchesContainer;
