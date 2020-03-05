import { RECEIVE_MESSAGE } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, { [action.message.id]: action.message }); 
        default:
            return state;
    }
};

export default messagesReducer;