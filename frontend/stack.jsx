import configureStore from './store/store';
import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    debugger;
    if (window.currentUser) {
        debugger;
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // JUST FOR TESTING -----------//
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //-----------------------------//
    ReactDOM.render(<Root store={store} />, root);
});