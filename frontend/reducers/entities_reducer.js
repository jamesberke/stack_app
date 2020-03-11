import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import channelsReducer from "./channels_reducer";
import messagesReducer from "./messages_reducer";
import membershipsReducer from "./memberships_reducer";

const entitiesReducer = combineReducers ({
    memberships: membershipsReducer,
    channels: channelsReducer,
    messages: messagesReducer,
    users: usersReducer
});

export default entitiesReducer;
