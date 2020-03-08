import React from "react";
import { connect } from "react-redux";

class MessageForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {body: ""}
    };

    update() {
        return event => this.setState({ [body]: event.taget.value })
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    
    render() {
        return(
            <form className="message-form-container" onSubmit={this.handleSubmit}>
                <input className="message-form-input" 
                        type="text" 
                        value={this.state.body} 
                        onChange={this.update()} 
                        placeholder="Message # Channel.name" />
            </form>
        )
    };

}

const mapStateToProps = state =>({
    currentUser: state.entities.users[state.session.id]
});

export default connect (mapStateToProps)(MessageForm);