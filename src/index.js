import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware, compose} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension/logOnlyInProduction';
import {Provider} from 'react-redux';

import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import thunkMiddleware from 'redux-thunk';

import {AppContainer} from './app/app.container';
import {rootReducer} from './app/app.reducer';

const history = createHistory();

const middlewares = [
    routerMiddleware(history),
    thunkMiddleware,
];

const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares), devToolsEnhancer({})),
);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <AppContainer/>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('app-root'),
    );
};

render();
