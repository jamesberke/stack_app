import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_NEW_MESSAGE = 'RECEIVE_NEW_MESSAGE';
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';

export const receiveMessages = messages => ({
    
})

export const receiveMessage = payload => ({
    type: RECEIVE_MESSAGE,
    payload
})

const receiveErrors = errors => ({
    type: RECEIVE_MESSAGE_ERRORS,
    errors
});

// export const fetchMessage = messageId => dispatch => MessageApiUtil.fetchMessage(messageId)
//     .then(message => dispatch(receiveMessage(message)),
//         errors => dispatch(receiveErrors(errors.responseJSON)));

export const createMessage = message => dispatch => MessageApiUtil.createMessage(message);

export const updateMessage = message => dispatch => MessageApiUtil.updateMessage(message)
    .then(message => dispatch(receiveMessage(message)),
        errors => dispatch(receiveErrors(errors.responseJSON)));




