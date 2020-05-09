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

    // houses all of the main app components and is the only route rendered while 
    // a user is logged in
    render() {
        return (
            <div className="client-main-page">
                <SidebarContainer />
                <ChannelShowContainer />
                <ChannelHeaderContainer />
                <Modal />
                <ListenerContainer />
            </div>
        )
    }
}

export default Client;