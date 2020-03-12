import React from 'react';

class ChannelHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let title = "";
        
        if (!!this.props.currentChannel) {
            title = this.props.currentChannel.name;
        } else {
            title = "Home"
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
                        onClick={() => this.props.deleteMembership(memId)}>
                Unsubscribe
            </button>
        ) : (
            <button className="channel-header-subscribe"
                        onClick={() => this.props.createMembership({["channel_id"]: this.props.currentChannel.id})}>
                Subscribe
            </button>
        );

        return(
            <div className="channel-header-container">
                <div className="channel-header-title">
                    <h1># {title}</h1>
                    {subButton}                    
                </div>
                {/* <div className="channel-header-right"> */}
                    
                    <i className="fas fa-search"></i>
                    <button className="channel-settings">
                        <i class="fas fa-cog"></i>
                    </button>
                    <button className="channel-member-dropdown">
                        <i class="fas fa-user"></i>
                    </button>
                    <input type="text" 
                            placeholder="SEARCH..." 
                            className="channel-header-search">
                    </input>
                    <button className="channel-darkmode-selector">
                        <i className="fas fa-lightbulb"></i>               
                    </button>
                {/* </div> */}
            </div>
        )
    }
}

export default ChannelHeader;