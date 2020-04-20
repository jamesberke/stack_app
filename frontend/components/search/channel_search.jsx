import React from 'react';

class ChannelSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchInput: '' };
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.props.fetchChannels();
    }

    update(event) {
        this.setState({ searchInput: event.currentTarget.value })
    }

    matches() {
        const channels = this.props.channels.filter(channel => channel.isDm === false);
        const matches = [];
        
        if (this.state.searchInput.length === 0) {
            return channels
        };

        channels.forEach(channel => {
            const nameSub = channel.name.slice(0, this.state.searchInput.length);
            if (nameSub.toLowerCase() === this.state.searchInput.toLocaleLowerCase()) {
                matches.push(channel);
            }
        });

        return matches;
    }

    handleChannelPick(id) {
        this.props.fetchChannel(id);
        this.props.closeModal();
    }

    render() {
        const matchedChannels = this.matches();
        const renderMatches = matchedChannels.map(matchedChannel => {

            return(
                <div className="channel-render" 
                        key={matchedChannel.id}
                        onClick={() => this.handleChannelPick(matchedChannel.id)}>
                    <div className="channel-render-title">
                        # {matchedChannel.name}
                    </div>
                    <div className="channel-render-description">
                        {matchedChannel.description}
                    </div>
                </div>
            )

        })

        return (
            <div className="channel-search-form-container">
                <input className="channel-search-input"
                        onChange={this.update}
                        value={this.state.searchInput}
                        placeholder="Search for a channel..." />
                <div className="channel-render-container">
                    {renderMatches}
                </div>
            </div>
        )
        
    }
};

export default ChannelSearch;