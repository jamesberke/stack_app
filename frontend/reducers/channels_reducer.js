import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // Grabs the current user's channels and populates the channel slice of state 
            // to avoid holding arrays of pointers in user state
            return action.currentUser.channels;
        case REMOVE_CHANNEL:
            delete newState[action.channel.id];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default channelsReducer;