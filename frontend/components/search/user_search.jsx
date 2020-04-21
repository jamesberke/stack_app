import React from 'react';

class UserSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchInput: '' };
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    update(event) {
        this.setState({ searchInput: event.currentTarget.value })
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

    matches() {
        const matches = [];
        const users = this.props.users.filter(user => user.username !== 'stack_bot')

        if (this.state.searchInput.length === 0) {
            return users
        };

        users.forEach(user => {
            const nameSub = user.username.slice(0, this.state.searchInput.length);
            if (nameSub.toLowerCase() === this.state.searchInput.toLocaleLowerCase()) {
                matches.push(user);
            }
        });

        return matches;
    }

    createDm(id) {
        // debugger;
        this.props.createChannel({
            name: id,
            is_dm: true,
            is_private: true
        })
        this.props.closeModal();
    }

    render() {
        const matchedUsers = this.matches();
        const renderMatches = matchedUsers.map(matchedUser => {
            return (
                <div className="user-render"
                    key={matchedUser.id}
                    onClick={() => this.createDm(matchedUser.id)}>
                    <img src={this.getProfilePic(matchedUser.username)} className="user-render-picture"></img>
                    <div className="user-render-name">
                        {matchedUser.username}
                    </div>
                    <div className="user-render-formalName">
                        {matchedUser.formalName}
                    </div>
                </div>
            )

        });

        return (
            <div className="user-search-form-container">
                <input className="user-search-input"
                    onChange={this.update}
                    value={this.state.searchInput}
                    placeholder="Search for a user to message..." />
                <div className="user-render-container">
                    {renderMatches}
                </div>
            </div>
        )

    };
};

export default UserSearch;