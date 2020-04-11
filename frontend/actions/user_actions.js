import { receiveCurrentUser } from './session_actions';
import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const fetchUsers = () => dispatch => UserApiUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)));

export const fetchUser = userId => dispatch => UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)));