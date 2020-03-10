import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';

const _nullUser = Object.freeze({
    id: null,
    currentChannel: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { id: action.currentUser.id })
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, { currentChannel: action.channel.channel.id });
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
};

export default sessionReducer;