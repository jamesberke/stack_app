import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';

const receiveChannel = channel => ({
    type: RECEIVE_CHANNEL,
    channel
});

const removeChannel = channelId => ({
    type: REMOVE_CHANNEL,
    channelId
})

const receiveErrors = errors => ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
});

export const fetchChannel = channelId => dispatch => ChannelApiUtil.fetchChannel(channelId)
    .then(channel => dispatch(receiveChannel(channel)),
        errors => dispatch(receiveErrors(errors.responseJSON)));

export const createChannel = channel => dispatch => ChannelApiUtil.createChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)),
        errors => dispatch(receiveErrors(errors.responseJSON)));

export const deleteChannel = channelId => dispatch => ChannelApiUtil.deleteChannel(channelId)
    .then(() => dispatch(removeChannel(channelId)),
        errors => dispatch(receiveErrors(errors.responseJSON)));