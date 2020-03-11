import ChannelHeader from './channel_header';
import { connect } from 'react-redux';
import { fetchMessage } from '../../actions/message_actions';
import { createMembership, deleteMembership } from '../../actions/membership_actions';

const mapStateToProps = state => {
    return {
        currentChannel: state.entities.channels[state.session.currentChannel],
        memberships: Object.values(state.entities.memberships)
    }
};

const mapDispatchToProps = dispatch => ({
    fetchMessage: messageId => dispatch(fetchMessage(messageId)),
    createMembership: membership => dispatch(createMembership(membership)),
    deleteMembership: membershipId => dispatch(deleteMembership(membershipId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelHeader)