import React from 'react';
import Cable from 'actioncable';

class Listener extends React.Component {
    constructor(props) {
        super(props);
        this.createSubscriptions = this.createSubscriptions.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.memberships.length) {
            this.createSubscriptions();
        }
    }

    createSubscriptions() {
        let memberships = this.props.memberships;

        this.chats = memberships.map(membership => (
            App.cable.subscriptions.create(
                {
                    channel: "ChatChannel",
                    room: membership.channelId
                },
                {
                    connected: () => {
                        console.log(`Connected to ${membership.channelId}`);
                },
                    disconnected: () => {
                        console.log("Disconnected!");
                },
                    received: data => {
                        let payload = {
                            messages: {
                                [data.message.id] : data.message
                            },
                            user: {
                                [data.user.id] : data.user
                            }
                        }
                        if (!!payload) {
                            this.props.receiveNewMessage(payload);
                        }
                    }
                }
            )
        ));
    }

    render() {
        return null;
    }
}

export default Listener;