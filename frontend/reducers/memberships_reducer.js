import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { REMOVE_MEMBERSHIP, RECEIVE_MEMBERSHIP } from '../actions/membership_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';

const membershipsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.currentUser.memberships;
        case RECEIVE_CHANNEL:
            return Object.assign({}, newState, {[action.channel.membership.id]: action.channel.membership}) 
        case RECEIVE_MEMBERSHIP:
            return Object.assign({}, state, {[action.membership.id]: action.membership})
        case REMOVE_MEMBERSHIP:
            delete newState[action.membershipId];
            return newState;
        default:
            return state;
    }
}

export default membershipsReducer;