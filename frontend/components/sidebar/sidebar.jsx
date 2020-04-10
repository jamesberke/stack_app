import React from 'react';
import { Link } from "react-router-dom";

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id);
        this.props.fetchChannels();
    }

    handleLogout(event) {
        event.preventDefault();
        this.props.logout();
    }

    toggleDropdown(event) {
        event.preventDefault();
        document.getElementById('dropdown').classList.toggle('show')
    }

    renderDms() {
        const dms_arr = [];
        const that = this;

        if (this.props.channels) {
            this.props.memberships.forEach(membership => {
                const id = membership.channelId;
                const channel = that.props.channels[id]
                if (!channel) {
                    return;
                }
                if (channel.isDm) {
                    dms_arr.push([channel.id, channel.name])
                }
            })
        }

        return dms_arr;
    }

    renderChannels() {
        const channels_arr = [];
        const that = this;

        if (this.props.channels) {
            this.props.memberships.forEach(membership => {
                const id = membership.channelId;
                const channel = that.props.channels[id]
                if (!channel) {
                    return;
                }
                if (!channel.isDm) {
                    channels_arr.push([channel.id, channel.name])
                }
            })
        }

        return channels_arr;
    }

    render() {
        const { currentUser } = this.props;
        const channelArr =  this.renderChannels();
        const dmArr = this.renderDms();
        let channelLinks;
        let dmLinks;

        if (!!this.props.currentChannel) {
            channelLinks = channelArr.map( ele => 
                <li key={ele[0]}>
                    <button onClick={() => this.props.fetchChannel(ele[0])}
                            className={ele[0] === this.props.currentChannel.id ? "selected" : "" }>
                                # {ele[1]}
                    </button>
                </li>);
        }

        if (!!this.props.currentChannel) {
            dmLinks = dmArr.map( ele => 
                <li key={ele[0]}>
                    <button onClick={() => this.props.fetchChannel(ele[0])}
                            className={ele[0] === this.props.currentChannel ? "selected" : ""}>     
                                {"\u2022"} {ele[1]}
                    </button>
                </li >);
        }

        return (
            <div className="sidebar-main-container">
                <div className="sidebar-currentuser-greeting"
                        onClick={this.toggleDropdown}>
                    <span className="sidebar-greeting-bullet">{"\u2022"}</span> {currentUser.username}
                    <img src={window.profilePicture} className="channel-header-picture"></img>
                    <i className="fas fa-caret-down"></i>
                </div>
                <div className="sidebar-greeting-dropdown-content" id="dropdown">
                    <button onClick={this.handleLogout} className="sidebar-logout-button">
                        Logout
                    </button>
                    <button className="sidebar-edit-profile-button">
                        Edit Profile
                    </button>
                    <a href='https://github.com/jamesberke/stack_app' 
                        className='dropdown-github'
                        target="_blank">
                        Visit my Github
                    </a>
                    <a href='https://www.linkedin.com/in/james-berke-33912718a/' 
                        className='dropdown-linkedin'
                        target="_blank">
                        Visit my LinkedIn
                    </a>
                </div>
                <input type="text" 
                        placeholder="Search for channels..."
                        className="sidebar-jump-to"
                        onClick={() => this.props.openModal('channelSearch')}>
                </input>
                <div className="sidebar-channels-container">
                    <h2 className="sidebar-channels-title">
                        Channels 
                    </h2>
                    <div className="sidebar-channels-render">
                        <ul>
                            {channelLinks}
                        </ul>
                    </div>
                    <div className="sidebar-new-channel" onClick={() => this.props.openModal('createChannel')}>
                        {"\u002B"} Create a channel
                    </div>
                </div>
                <div className="sidebar-dms-container">
                    <h2 className="sidebar-dms-title">
                        Direct Messages 
                        <span className="sidebar-add-dm-icon"
                            onClick={this.props.openModal('userSearch')}>
                            +
                        </span>
                    </h2>
                    <div className="sidebar-dms-render">
                        <ul>
                            {dmLinks}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;