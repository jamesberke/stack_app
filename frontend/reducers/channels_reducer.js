import { RECEIVE_CHANNELS, REMOVE_CHANNEL, RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.currentUser.channels;
        case RECEIVE_CHANNELS:
            return action.channels;
        case RECEIVE_CHANNEL:
            return Object.assign({}, newState, {[action.channel.channel.id]: action.channel.channel})
        case REMOVE_CHANNEL:
            delete newState[action.channelId];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default channelsReducer;