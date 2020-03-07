import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Sidebar from './sidebar';
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    channels: Object.values(state.entities.channels)
});

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);