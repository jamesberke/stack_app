import React from 'react';
import MessageForm from './message_form';

class ChannelShow extends React.Component {

    constructor(props) {
        super(props);
        this.bottom = React.createRef();
        this.renderMessages = this.renderMessages.bind(this);
    };

    componentDidMount() {
        const channels = Object.values(this.props.channels);
        if (channels.length != 0) {
            this.props.fetchChannel(channels[0].id);
        }
    };

    componentDidUpdate() {
        // const channels = Object.values(this.props.channels);
        // if (this.props.messages.length < 1 && channels.length > 0) {
        //     const selectedChannel = channels.filter(ch => ch.name === "Global")
        //     this.props.fetchChannel(selectedChannel[0].id);
        // }
        if (Object.values(this.props.users).length > 1) {
            this.bottom.current.scrollIntoView();
        }
    }

    renderMessages() {
        let that = this;
        if (!!this.props.messages && !!this.props.users) {
            const messagesArr = this.props.messages.map(message => {
                
                const userId = message.userId;
                let timeStamp = message.createdAt.slice(11, 16);

                if (timeStamp.slice(0,2) > 12) {
                    timeStamp = `${(timeStamp.slice(0,2) - 12)}${timeStamp.slice(2, timeStamp.length)} PM`
                } else {
                    timeStamp = `${timeStamp} AM`
                }

                return (
                    <li className="channel-show-message-render" key={message.id}>
                        <div>
                            <img src={window.profilePicture} className="channel-message-picture"></img>
                        </div>
                        <div>
                            <div className="channel-message-title">
                                {that.props.users[userId].username} <span className="timestamp">{timeStamp}</span>
                            </div>
                            <div className="channel-message-body">
                                {message.body}
                            </div>
                        </div>
                    </li>
                )  

            });

        return messagesArr;
        }
    };

    render() {
        if (Object.values(this.props.users).length < 2) {
            return null;
        }
        const channel_messages = this.renderMessages();
        return (
            <div className="channel-show-main">
                <div className="message-form-main">
                    <MessageForm />
                </div>
                <div className="channel-message-index">
                    <ul className="channel-show-message-container">
                        {channel_messages}
                        <div className="bottom" ref={this.bottom} />
                    </ul>
                </div>
            </div>
        )
    }
}

export default ChannelShow;