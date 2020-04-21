import ChannelHeader from './channel_header';
import { connect } from 'react-redux';
import { fetchChannel } from '../../actions/channel_actions';
import { createMembership, deleteMembership } from '../../actions/membership_actions';
import { deleteChannel } from '../../actions/channel_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        currentChannel: state.entities.channels[state.session.currentChannel],
        channels: state.entities.channels,
        currentUser: state.session.id,
        users: state.entities.users,
        memberships: Object.values(state.entities.memberships)
    }
};

const mapDispatchToProps = dispatch => ({
    createMembership: membership => dispatch(createMembership(membership)),
    deleteMembership: membershipId => dispatch(deleteMembership(membershipId)),
    deleteChannel: channelId => dispatch(deleteChannel(channelId)),
    fetchChannel: channelId => dispatch(fetchChannel(channelId)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelHeader)