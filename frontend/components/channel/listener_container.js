import { connect } from 'react-redux';
import Listener from './listener';
import { receiveNewMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
        currentUser: state.session.id,
        memberships: Object.values(state.entities.memberships)
});

const mapDispatchTopProps = dispatch => ({
    receiveNewMessage: message => dispatch(receiveNewMessage(message))
});

export default connect(mapStateToProps, mapDispatchTopProps)(Listener);