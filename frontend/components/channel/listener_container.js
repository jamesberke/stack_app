import { connect } from 'react-redux';
import Listener from './listener';
import { receiveMessage } from '../../actions/message_actions';

const mapStateToProps = state => {
    // debugger;
    return ({
        currentUser: state.session.id,
        memberships: Object.values(state.entities.memberships)
    })
};

const mapDispatchTopProps = dispatch => ({
    receiveMessage: payload => dispatch(receiveMessage(payload))
});

export default connect(mapStateToProps, mapDispatchTopProps)(Listener);