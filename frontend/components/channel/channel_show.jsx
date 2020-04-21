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
        const channels = Object.values(this.props.channels);
        
        if (this.props.messages.length < 1 && channels.length > 0) {
            const selectedChannel = channels.filter(ch => ch.name === "Global")
            this.props.fetchChannel(selectedChannel[0].id);
        }
        
        if (Object.values(this.props.users).length > 1) {
            this.bottom.current.scrollIntoView();
        }
    }

    getProfilePic(name) {
        let first = name.slice(0,1).toLowerCase();
        if ('abcd'.includes(first)) {
            return window.profilePicture1;
        } else if ('efghi'.includes(first)) {
            return window.profilePicture2;
        } else if ('jklm'.includes(first)) {
            return window.profilePicture3;
        } else if ('nopqr'.includes(first)) {
            return window.profilePicture4;
        } else if ('stuv'.includes(first)) {
            return window.profilePicture5;
        } else {
            return window.profilePicture6;
        }
    }

    getTimeStamp(timeStamp) {
        let hours = parseInt(timeStamp.slice(0,2));
        let minutes = timeStamp.slice(2, timeStamp.length);

        let PstHours = (hours + 17) % 23;

        if (PstHours > 12) {
            return `${(PstHours - 12)}${minutes} PM`;
        } else {
            return `${PstHours}${minutes} AM`;
        }
    }

    renderMessages() {
        let that = this;
        
        if (!!this.props.messages && !!this.props.users) {
            const messagesArr = this.props.messages.map(message => {
                
                const userId = message.userId;
                let timeStamp = message.createdAt.slice(11, 16);

                

                return (
                    <li className="channel-show-message-render" key={message.id}>
                        <div>
                            <img src={this.getProfilePic(that.props.users[userId].username)} className="channel-message-picture"></img>
                        </div>
                        <div>
                            <div className="channel-message-title">
                                {that.props.users[userId].username} <span className="timestamp">{this.getTimeStamp(timeStamp)}</span>
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