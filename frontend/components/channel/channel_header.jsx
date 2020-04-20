import React from 'react';

class ChannelHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChannelDelete(id, memId) {
        this.props.deleteChannel(id);
        this.props.deleteMembership(memId);

        let global = Object.values(this.props.channels)[0];
        this.props.fetchChannel(global.id);
    }

    render() {
        let title = "";
        
        if (!!this.props.currentChannel) {
            title = this.props.currentChannel.name;
        } else {
            title = 'Home';
        };
        
        let subscribed = false;
        let memId = 0;
        let that =this;
        
        if (!!this.props.currentChannel) {
            this.props.memberships.forEach(membership => {
                if (membership.channelId === that.props.currentChannel.id) {
                    subscribed = true;
                    memId = membership.id;
                }
            })
        }
        
        const subButton = (subscribed) ? (
            <button className="channel-header-subscribe"
                onClick={() => this.props.deleteMembership(memId)}
            >
                Unsubscribe
            </button>
        ) : (
            <button className="channel-header-subscribe"
                onClick={() => this.props.createMembership({["channel_id"]: this.props.currentChannel.id})}
            >
                Subscribe
            </button>
        );
        
        let deleteButton;
        if (!!this.props.currentChannel) {
            deleteButton = (this.props.currentChannel.isDm || this.props.currentChannel.adminId === this.props.currentUser) ? (
                <button className="channel-header-delete"
                    onClick={() => this.handleChannelDelete(this.props.currentChannel.id, memId)}
                >
                    Delete Channel
                </button>
            ) : (
                <div></div>
            )
        }

        return(
            <div className="channel-header-container">
                <div className="channel-header-title">
                    <h1># {title}</h1>
                    {subButton}                    
                </div> 
                {deleteButton}                   
                <i className="fas fa-search"></i>
                <button className="channel-settings">
                    <i className="fas fa-cog"></i>
                </button>
                <button className="channel-member-dropdown">
                    <i className="fas fa-user"></i>
                </button>
                <input type="text" 
                        placeholder="SEARCH..." 
                        className="channel-header-search">
                </input>
                <button className="channel-darkmode-selector">
                    <i className="fas fa-lightbulb"></i>               
                </button>
            </div>
        )
    }
}

export default ChannelHeader;