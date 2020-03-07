import ChannelHeaderContainer from '../channel/channel_header_container'
import { Link } from 'react-router-dom';
import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';

class Client extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="client-main-page">
                <SidebarContainer />
                <ChannelHeaderContainer />
            </div>
        )
    }
}

export default Client;