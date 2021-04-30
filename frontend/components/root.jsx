import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';


//need to preload script for running loading icon while client page renders

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )
};

export default Root;