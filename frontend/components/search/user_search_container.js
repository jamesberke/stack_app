import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { createChannel } from '../../actions/channel_actions';
import { fetchUsers } from '../../actions/user_actions';
import UserSearch from './user_search';

const mapStateToProps = state => ({
    users: Object.values(state.entities.users.users),
    memberships: Object.values(state.entities.memberships)
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    closeModal: () => dispatch(closeModal()),
    createChannel: channel => dispatch(createChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch)