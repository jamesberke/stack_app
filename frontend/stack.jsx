import configureStore from './store/store';
import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    // Allows me to bootstrap the current user to the window to use and then deletes
    // it so users can't reference themselves in the console
    if (window.currentUser) {
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