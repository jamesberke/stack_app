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
        return e => this.setState({ 
                        [field]: e.target.value, 
                        ['channel_id']: this.props.currentChannel.channel.id
                        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createMessage(this.state);
        // this.state.body = "";
        this.setState({body: ""});
    }

    render() {
        let channelName = "";
        if (!!this.props.currentChannel) {
            channelName = this.props.currentChannel.channel.name;
        } else {
            channelName = "Home";
        }
        return(
            <form className="message-form-container" onSubmit={this.handleSubmit}>
                <input className="message-form-input" 
                        type="text" 
                        value={this.state.body} 
                        onChange={this.update('body')} 
                        placeholder={`Message # ${channelName}`}>
                </input>
            </form>
        )
    };

}

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    currentChannel: state.entities.channels.currentChannel
});

const mapDispatchToProps = dispatch => ({
    createMessage: message => dispatch(createMessage(message))
})

export default connect (mapStateToProps, mapDispatchToProps)(MessageForm);