import React from 'react';

class ChannelHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    // after the channel is deleted I iterate over the channel's memberships and 
    // delete them too to keep the database clean

    // global channel is fetched to fix an issue where after the channel is delted
    // the sidebar is updated but not re-rendered so the channels dissappear. 
    // fetchChannel insures global will be the channel you land on after deleting 
    // your channel
    handleChannelDelete(id) {
        this.props.deleteChannel(id);
        this.deleteMemberships(id);
    
        let global = Object.values(this.props.channels)[0];
        this.props.fetchChannel(global.id);
    }

    deleteMemberships(id) {
        const mems = this.props.memberships.filter(mem => mem.channelId === id);
        mems.forEach(mem => this.props.deleteMembership(mem.id));
    }

    // If the channel is a DM, the title will be the userId of the user invited to the dm.
    // if channel is a dm and the current user is the admin it will display the 
    // invited user's name as title
    // if channel is a dm and current user is not admin, it will display admin's name
    // if channel is not dm, display channel name
    getTitle() {
        let that = this;

        if (!!that.props.currentChannel) {
            let userId = parseInt(that.props.currentChannel.name);

            if (that.props.currentChannel.isDm && userId !== that.props.currentUser) {
                let user = that.props.users[userId];
                return `# ${user.username}`;
            } else if(that.props.currentChannel.isDm && userId === that.props.currentUser) {
                let admin = that.props.users[that.props.currentChannel.adminId];
                return `# ${admin.username}`;
            } else {
                return `# ${that.props.currentChannel.name}`;
            }
        }
    }

    render() {   
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
        
        // dynamic 'subscribe' or 'unsubscribe' button rendered under channel title based on
        // subscription status
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
        
        //Renders delete button if channel is a dm or current user is the admin of the channel
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
                    <h1>{this.getTitle()}</h1>
                    {subButton}                    
                </div> 
                {deleteButton}                   
                <i className="fas fa-search header-search-icon"></i>
                <input type="text" 
                        placeholder="Search for users..." 
                        className="channel-header-search"
                        onClick={() => this.props.openModal('userSearch')}>
                </input>
                <button className="channel-darkmode-selector">
                    <i className="fas fa-lightbulb"></i>               
                </button>
            </div>
        )
    }
}

export default ChannelHeader;