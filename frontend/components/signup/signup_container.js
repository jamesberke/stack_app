import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import React from "react";

const mapStateToProps = state => ({
    user: {
        username: "",
        formalName: "",
        email: "",
        password: ""
    }
});

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);