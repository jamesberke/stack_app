import { receiveCurrentUser } from './session_actions';
import * as UserApiUtil from '../util/user_api_util';

export const fetchUser = userId => dispatch => UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)));