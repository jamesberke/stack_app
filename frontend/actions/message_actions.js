import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
// export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';

const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
});

// export const receiveErrors = errors => ({
//     type: RECEIVE_MESSAGE_ERRORS,
//     errors
// });

export const fetchMessages = messageId => dispatch => MessageApiUtil.fetchMessage(messageId)
    .then(message => dispatch(receiveMessage(message)));
        // errors => dispatch(receiveErrors(errors.responseJSON)));

export const fetchMessages = messageId => dispatch => MessageApiUtil.fetchMessage(messageId)
    .then(message => dispatch(receiveMessage(message)));
        // errors => dispatch(receiveErrors(errors.responseJSON)));
