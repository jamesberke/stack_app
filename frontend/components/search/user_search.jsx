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

    matches() {
        const matches = [];

        if (this.state.searchInput.length === 0) {
            return this.props.users
        };

        this.props.users.forEach(user => {
            const nameSub = user.name.slice(0, this.state.searchInput.length);
            if (nameSub.toLowerCase() === this.state.searchInput.toLocaleLowerCase()) {
                matches.push(user);
            }
        });

        return matches;
    }

    createDm(id) {
        this.props.closeModal();
    }

    render() {
        const matchedUsers = this.matches();
        const renderMatches = matchedUsers.map(matchedUser => {
            return (
                <div className="user-render"
                    key={matchedUser.id}
                    onClick={() => this.createDm(matchedUser.id)}>
                    <div className="user-render-title">
                        {matchedUser.name}
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
                    placeholder="Search for a user..." />
                <div className="user-render-container">
                    {renderMatches}
                </div>
            </div>
        )

    };
};

export default UserSearch;