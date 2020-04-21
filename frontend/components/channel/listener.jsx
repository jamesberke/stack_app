import React from 'react';

class Listener extends React.Component {
    constructor(props) {
        super(props);
        this.createSubscriptions = this.createSubscriptions.bind(this);
    }

    componentDidMount() {
        
        if (this.props.currentUser) {
            this.createSubscriptions();
        }
    }

    componentDidUpdate(prevProps) {
        
        //DO NOT REMOVE THIS IF CHECK!
        if (prevProps && prevProps.currentChannel !== this.props.currentChannel) {
            this.createSubscriptions();
        }
    }

    componentWillUnmount() {

        this.chats.forEach(channel => {
            channel.unsubscribe();
        })
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
                        this.props.receiveMessage(payload);                        
                    }
                }
            )
        ));
    }

    render() {
        if (!this.props.currentUser) return null;
        return (
            <div></div>
        );
    }
}

export default Listener;