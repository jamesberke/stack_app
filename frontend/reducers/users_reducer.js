import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })   
            return {currentUser: {
                id: action.currentUser.id,
                username: action.currentUser.username,
                formalName: action.currentUser.formalName,
                email: action.currentUser.email
            }}   
        default:
            return state;
    };
}

export default usersReducer;