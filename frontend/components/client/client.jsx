import ChannelHeaderContainer from '../channel/channel_header_container';
import ChannelShowContainer from '../channel/channel_show_container';
import ListenerContainer from '../channel/listener_container';
import Modal from '../modal/modal';
import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';

class Client extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="client-main-page">
                <Modal />
                <SidebarContainer />
                <ChannelHeaderContainer />
                <ChannelShowContainer />
                <ListenerContainer />
            </div>
        )
    }
}

export default Client;