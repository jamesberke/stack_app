import React from 'react';
import { Link } from "react-router-dom";

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    // ensures population of users and channels in redux state 
    componentDidMount() {
        if (this.props.currentUser) {
            this.props.fetchUser(this.props.currentUser.id);
        }
        this.props.fetchChannels();
        this.props.fetchUsers();
    }

    getProfilePic(name) {
        let first = name.slice(0, 1).toLowerCase();
        if ('abcd'.includes(first)) {
            return window.profilePicture1;
        } else if ('efghi'.includes(first)) {
            return window.profilePicture2;
        } else if ('jklm'.includes(first)) {
            return window.profilePicture3;
        } else if ('nopqr'.includes(first)) {
            return window.profilePicture4;
        } else if ('stuv'.includes(first)) {
            return window.profilePicture5;
        } else {
            return window.profilePicture6;
        }
    }

    handleLogout(event) {
        event.preventDefault();
        this.props.logout();
    }

    // toggle option for the User greeting component to show logout button and links to 
    // dev sites
    toggleDropdown(event) {
        event.preventDefault();
        document.getElementById('dropdown').classList.toggle('show')
    }

    // dynamic rendering of DM titles based on if user is admin of DM or not
    getDmTitle(userId, adminId) {
        if (parseInt(userId) === this.props.currentUser.id) {   
            return this.props.users[parseInt(adminId)].username;
        } else {
            return this.props.users[parseInt(userId)].username;
        }
    }

    // sorting Channels and DMs to be displayed seperately
    renderDms() {
        const dms_arr = [];
        const that = this;

        if (this.props.channels) {
            this.props.memberships.forEach(membership => {
                let id = membership.channelId;
                let channel = that.props.channels[id]
                if (!channel) {
                    return;
                }
                if (channel.isDm) {
                    dms_arr.push([channel.id, channel.name, channel.adminId])
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

        // this allows me to add different CSS styles to the currently selected channel or DM
        if (!!this.props.currentChannel) {
            channelLinks = channelArr.map( ele => 
                <li key={ele[0]}>
                    <button onClick={() => this.props.fetchChannel(ele[0])}
                            className={ele[0] === this.props.currentChannel.id ? "selected" : "" }>
                                # {ele[1]}
                    </button>
                </li>);
        }

        if (!!this.props.currentChannel && this.props.users) {
            dmLinks = dmArr.map( ele => 
                <li key={ele[0]}>
                    <button onClick={() => this.props.fetchChannel(ele[0])}
                            className={ele[0] === this.props.currentChannel.id ? "selected" : ""}>    
                                {"\u2022"} {this.getDmTitle(ele[1], ele[2])}
                    </button>
                </li >);
        }

        if (!!currentUser) {
            return (
                <div className="sidebar-main-container">
                    <div className="sidebar-currentuser-greeting"
                            onClick={this.toggleDropdown}>
                        <span className="sidebar-greeting-bullet">{"\u2022"}</span> {currentUser.username}
                        <img src={this.getProfilePic(currentUser.username)} className="channel-header-picture"></img>
                        <i className="fas fa-caret-down"></i>
                    </div>
                    <div className="sidebar-greeting-dropdown-content" id="dropdown">
                        <button onClick={this.handleLogout} className="sidebar-logout-button">
                            Logout
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
                    <i className="fas fa-search sidebar-search-icon"></i>
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
                        <div className="sidebar-dms-title">
                            Direct Messages 
                            <span className="sidebar-add-dm-icon"
                                onClick={() => this.props.openModal('userSearch')}>
                                {"\u002B"}
                            </span>
                        </div>
                        <div className="sidebar-dms-render">
                            <ul>
                                {dmLinks}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div></div>;
        }
    }
}

export default Sidebar;