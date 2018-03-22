import { connect } from "react-redux";
import Bank from "../components/Bank.jsx";
import { authorizeAccount, authorizeAccountAction } from "../actions/index";

const mapStateToProps = state => (state);

const mapDispatchToProps = dispatch => ({
    authorizeAccount: (data) => {
        dispatch(authorizeAccount(data))
    }
})

const BankContainer = connect(mapStateToProps, mapDispatchToProps)(Bank);

export default BankContainer;
