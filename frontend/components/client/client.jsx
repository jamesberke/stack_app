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
            <div>
                <h1>You Made it Bruh!</h1>
                <button onClick={this.handleClick}>Logout</button>
            </div>
        )
    }
}

export default Client;