import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Sidebar from './sidebar';
import { fetchChannel, fetchChannels } from '../../actions/channel_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    channels: state.entities.channels,
    currentChannel: state.entities.channels[state.session.currentChannel],
    memberships: Object.values(state.entities.memberships)
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchChannel: channelId => dispatch(fetchChannel(channelId)),
    fetchChannels: () => dispatch(fetchChannels()),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);