import React from "react";
import { connect } from "react-redux";

class MessageForm extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return null;
    };

}

const mapStateToProps = state =>({
    currentUser: state.entities.users[state.session.id]
});

export default connect (mapStateToProps)(MessageForm);