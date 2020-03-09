import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, { [action.message.id]: action.message }); 
        case RECEIVE_CHANNEL:
            return action.channel.messages;
        default:
            return state;
    }
};

export default messagesReducer;