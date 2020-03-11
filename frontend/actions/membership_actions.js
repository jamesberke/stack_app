import * as MembershipApiUtil from '../util/membership_api_util';
import { receiveErrors } from '../actions/channel_actions';

export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP';
export const REMOVE_MEMBERSHIP = 'REMOVE_MEMBERSHIP';

const receiveMembership = membership => ({
    type: RECEIVE_MEMBERSHIP,
    membership
})

const removeMembership = membershipId => ({
    type: REMOVE_MEMBERSHIP,
    membershipId
})

export const createMembership = membership => dispatch => MembershipApiUtil.createMembership(membership)
    .then(membership => dispatch(receiveMembership(membership)),
        errors => dispatch(receiveErrors(errors.responseJSON)));

export const deleteMembership = membershipId => dispatch => MembershipApiUtil.deleteMembership(membershipId)
    .then((membership) => dispatch(removeMembership(membership.id)),
        errors => dispatch(receiveErrors(errors.responseJSON)));