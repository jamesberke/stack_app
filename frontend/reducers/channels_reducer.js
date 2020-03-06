import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CHANNEL:
            return Object.assign({}, newState, { [action.channel.id]: action.channel });
        case REMOVE_CHANNEL:
            delete newState[action.channel.id];
            return newState;
        default:
            return state;
    }
}

export default channelsReducer;