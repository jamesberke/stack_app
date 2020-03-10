import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const membershipsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.currentUser.memberships
        default:
            return state;
    }
}

export default membershipsReducer;