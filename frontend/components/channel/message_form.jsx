import React from "react";
import { connect } from "react-redux";
import { createMessage } from "../../actions/message_actions";

class MessageForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {body: ""};
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({ [field]: e.target.value, 
                                    ['channel_id']: this.props.currentChannel.id
                                    });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createMessage(this.state);
        this.setState({body: ""});
    }

    getPlaceholder() {
        if (this.props.currentChannel) {
            if (this.props.currentChannel.isDm) {
                return 'New Direct Message'
            } else {
                return `Message # ${this.props.currentChannel.name}`
            }
        };  
    }

    render() {
        return (
            <form className="message-form-container" onSubmit={this.handleSubmit}>
                <input className="message-form-input" 
                        type="text" 
                        value={this.state.body} 
                        onChange={this.update('body')} 
                        placeholder={this.getPlaceholder()}>
                </input>
            </form>
        )
    };

}

const mapStateToProps = state => ({
    currentChannel: state.entities.channels[state.session.currentChannel],
    users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
    createMessage: message => dispatch(createMessage(message))
})

export default connect (mapStateToProps, mapDispatchToProps)(MessageForm);