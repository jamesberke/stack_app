import React from 'react';

class ChannelHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="channel-header-container">
                {/* <div className="channel-header-left"> */}
                    <div className="channel-header-title">
                        {/* render the current channel's name */}
                        <h1>#Channel.name</h1>
                    </div>
                {/* </div> */}
                <div className="channel-header-right">
                    <div>
                    <input type="text" 
                            placeholder="SEARCH..." 
                            className="channel-header-search">
                    </input>
                    </div>
                    <button className="channel-darkmode-selector">
                        Darkmode
                    </button>
                </div>
            </div>
        )
    }
}

export default ChannelHeader;