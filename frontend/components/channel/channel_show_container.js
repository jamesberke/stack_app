import ChannelShow from './channel_show';
import { fetchChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    messages: Object.values(state.entities.messages),
    users: state.entities.users,
    channels: state.entities.channels
});

const mapDispatchToProps = dispatch => ({
    fetchChannel: channelId => dispatch(fetchChannel(channelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelShow);