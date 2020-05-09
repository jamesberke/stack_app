import { connect } from 'react-redux';
import Listener from './listener';
import { receiveMessage } from '../../actions/message_actions';

const mapStateToProps = state => {
    return ({
        memberships: Object.values(state.entities.memberships),
        currentUser: state.session.id,
        currentChannel: state.session.currentChannel
    })
};

const mapDispatchTopProps = dispatch => ({
    receiveMessage: payload => dispatch(receiveMessage(payload))
});

export default connect(mapStateToProps, mapDispatchTopProps)(Listener);