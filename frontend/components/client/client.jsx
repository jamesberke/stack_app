import { Link } from 'react-router-dom';
import React from 'react';

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
            <button onClick={this.handleClick}>Logout</button>
        )
    }
}

export default Client;