import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:  
            return {[action.currentUser.id]: {
                id: action.currentUser.id,
                username: action.currentUser.username,
                formalName: action.currentUser.formalName,
                email: action.currentUser.email
            }};
        case RECEIVE_CHANNEL:
            debugger;
            return action.users;
        default:
            return state;
    };
}

export default usersReducer;