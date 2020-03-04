import { connect } from "react-redux";
import { signup, login, clearSessionErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import React from "react";

const mapStateToProps = state => ({
    user: {
        username: "",
        formalName: "",
        email: "",
        password: "",
    },
    errors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);