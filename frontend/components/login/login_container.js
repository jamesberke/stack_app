import { connect } from "react-redux";
import { login , clearSessionErrors} from "../../actions/session_actions";
import LoginForm from './login_form';
import React from "react";

const mapStateToProps = state => ({
    user: {
        email: "",
        password: ""
    },
    errors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);