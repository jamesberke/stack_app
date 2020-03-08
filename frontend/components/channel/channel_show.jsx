import React from 'react';

class ChannelShow extends React.Component {

    constructor(props) {
        super(props);
    };

    componentDidMount() {
        // debugger;
        const channels = Object.values(this.props.channels);
        if (channels.length != 0) {
            this.props.fetchChannel(channels[0].id);
        }
    };

    renderMessages() {
        // debugger;
        if (this.props.messages) {
            const messagesArr = this.props.messages.map(message => {
                if (message.created_at) {
                    const date = message.created_at.slice(11, 16).split(':');

                    if (Number(date[0]) > 12) {
                        date[0] = String(Number(date[0]) - 12);
                    } else if (Number(date[0]) < 10 && date[0] !== '00') {
                        date[0] = date[0].slice(1);
                    } else if (date[0] === '00') {
                        date[0] = '12';
                    }

                    const newDate = Number(message.created_at.slice(11, 13)) > 12 ? `${date.join(':')} PM` : `${date.join(':')} AM`;
                    // debugger;

                    return (
                        <div className="channel-show-message-render">
                            <div className="channel-message-title">
                                {this.props.users[message.user_id].username} {newDate}
                            </div>
                            <div className="channel-message-body">
                                {message.body}
                            </div>
                        </div>
                    )    
                }
            });
            return messagesArr;
        // debugger;
        }
    };

    render() {
        const channel_messages = this.renderMessages();
        // debugger;
        return (
            <div className="channel-show-main">
                Hello
                {channel_messages}
                {/* <MessageForm /> */}
            </div>
        )
    }
}

export default ChannelShow;