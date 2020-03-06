import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger;
            return action.currentUser.channels;
            // action.currentUser.channels.forEach(channel =>
            //     newState[channel.id] = channel
            // );
            return newState;
        case RECEIVE_CHANNEL:
            return Object.assign({}, newState, { [action.channel.id]: action.channel });
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