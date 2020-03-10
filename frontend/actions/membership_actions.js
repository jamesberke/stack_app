// import * as MembershipApiUtil from '../util/membership_api_util';
// import { receiveErrors } from '../actions/channel_actions';

// export const RECEIVE_MEMBERSHIP = 'RECEIVE_MEMBERSHIP';

// const receiveMembership = membership => ({
//     type: RECEIVE_MEMBERSHIP,
//     membership
// })

// export const createMembership = membership => dispatch => MembershipApiUtil.createMembership(membership)
//     .then(membership => dispatch(receiveCurrentUser(membership)),
//         errors => dispatch(receiveErrors(errors.responseJSON)));

// export const deleteMembership = membershipId => dispatch => MembershipApiUtil.deleteMembership(membershipId)
//     .then(() => dispatch(recieveChannel(channelId)),
//         errors => dispatch(receiveErrors(errors.responseJSON)));