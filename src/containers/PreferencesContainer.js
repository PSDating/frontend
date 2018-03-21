import { connect } from "react-redux";
import Preferences from "../components/Preferences.jsx";
import { updatePreference } from "../actions";

const mapStateToProps = state => ({
  preferences: state.preferences,
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  updatePreference: data => {
    dispatch(updatePreference(data));
  },
});

const PreferencesContainer = connect(mapStateToProps, mapDispatchToProps)(Preferences);

export default PreferencesContainer;
