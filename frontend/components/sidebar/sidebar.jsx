import React from 'react';
import { Link } from "react-router-dom";

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id);
    }

    handleLogout(event) {
        event.preventDefault();
        this.props.logout();
    }

    handleChannelPick(id) {
        // event.preventDefault();
    }

    renderDms() {
        const dms_arr = [];

        this.props.channels.forEach(channel => {
            if (channel.isDm === true) {
                dms_arr.push([channel.id, channel.name])
            }
        })

        return dms_arr;
    }

    renderChannels() {
        const channels_arr = [];

        this.props.channels.forEach(channel => {
            if (channel.isDm === false) {
                channels_arr.push([channel.id, channel.name])
            }
        })

        return channels_arr;
    }

    render() {
        const { currentUser } = this.props;
        const channelArr =  this.renderChannels();
        const dmArr = this.renderDms();
        // may need to change from link to button to call event listener to load channel
        const channelLinks = channelArr.map((ele) => 
            <li key={ele[0]}>
                {/* <Link to={`/api/channels/${ele[0]}`}># {ele[1]}</Link> */}
                <button onClick={() => this.props.fetchChannel(ele[0])}># {ele[1]}</button>
            </li>);
        const dmLinks = dmArr.map((ele) => 
            <li key={ele[0]}>
                {/* <Link to={`/api/channels/${ele[0]}`}>{" \u2022 "} {ele[1]}</Link> */}
                <button onClick={this.handleDmPick}>{" \u2022 "} {ele[1]}</button>
            </li >);

        return (
            <div className="sidebar-main-container">
                <div className="sidebar-currentuser-greeting">
                    {currentUser.username}
                </div>
                <button onClick={this.handleLogout} className="sidebar-logout-button">
                    Logout
                </button>
                <input type="text" 
                        placeholder="SEARCH..."
                        className="sidebar-jump-to">
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
                    <div className="sidebar-new-channel">
                        {"\u002B"} Add a channel
                    </div>
                </div>
                <div className="sidebar-dms-container">
                    <h2 className="sidebar-dms-title">
                        Direct Messages <span className="sidebar-add-dm-icon">{"\u2295"}</span>
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