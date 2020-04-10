import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { createMembership, deleteMembership } from '../../actions/membership_actions';
import { fetchChannel, fetchChannels } from '../../actions/channel_actions';
import ChannelSearch from './channel_search';

const mapStateToProps = state => ({
        channels: Object.values(state.entities.channels),
        memberships: Object.values(state.entities.memberships)
});

const mapDispatchToProps = dispatch => ({
    fetchChannel: channelId => dispatch(fetchChannel(channelId)),
    fetchChannels: () => dispatch(fetchChannels()),
    closeModal: () => dispatch(closeModal())
    // createMembership: membership => dispatch(createMembership(membership)),
    // deleteMembership: membershipId => dispatch(deleteMembership(membershipId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelSearch)