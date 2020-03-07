import { Link } from 'react-router-dom';
import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';

class Client extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.logout();
    }

    render() {
        return (
            <div className="client-main-page">
                <SidebarContainer />
            </div>
        )
    }
}

export default Client;