import React from 'react';

class ChannelHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let title = "";
        if (!!this.props.currentChannel) {
            title = this.props.currentChannel.channel.name;
        } else {
            title = "Home"
        };
        return(
            <div className="channel-header-container">
                <div className="channel-header-title">
                    <h1># {title}</h1>
                </div>
                <div className="channel-header-right">
                    <input type="text" 
                            placeholder="SEARCH..." 
                            className="channel-header-search">
                    </input>
                    <button className="channel-darkmode-selector">
                        Darkmode
                    </button>
                </div>
            </div>
        )
    }
}

export default ChannelHeader;