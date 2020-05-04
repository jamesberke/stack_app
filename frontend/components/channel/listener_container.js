import { connect } from 'react-redux';
import Listener from './listener';
import { receiveMessage } from '../../actions/message_actions';

const mapStateToProps = state => {
    return ({
        currentUser: state.session.id,
        currentChannel: state.session.currentChannel,
        memberships: state.entities.memberships
    })
};

const mapDispatchTopProps = dispatch => ({
    receiveMessage: payload => dispatch(receiveMessage(payload))
});

export default connect(mapStateToProps, mapDispatchTopProps)(Listener);