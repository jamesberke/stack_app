import React from 'react';

class Listener extends React.Component {
    constructor(props) {
        super(props);
        this.membership = {};
        this.createSubscription = this.createSubscription.bind(this);
    }

    // calls create subscriptions once the client page is rendered
    componentDidMount() {
        
        if (this.props.currentUser) {
            this.membership = this.props.memberships[this.props.currentChannel];
            this.createSubscription();
        }
    }

    // calls createSubscriptions if a channel re render is needed but won't recreate
    // already existing Action Cable subscriptions
    componentDidUpdate(prevProps) {
        
        //DO NOT REMOVE THIS IF CHECK!
        if (prevProps && prevProps.currentChannel !== this.props.currentChannel) {
            this.membership = this.props.memberships[this.props.currentChannel];
            this.createSubscription();
        }
    }

    // iterates through and deletes Action Cable subscriptions on logout
    componentWillUnmount() {

        // this.chats.forEach(channel => {
        //     channel.unsubscribe();
        // })
        this.membership.unsubscribe();
    }

    createSubscription() {

        App.cable.subscriptions.create(
            {
                channel: "ChatChannel",
                room: this.membership.channelId
            },
            {
                connected: () => {
                    console.log(`Connected to ${this.membership.channelId}`);
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
        );
    }

    render() {
        if (!this.props.currentUser) return null;
        return (
            <div></div>
        );
    }
}

export default Listener;