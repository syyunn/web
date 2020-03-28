import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './redux/store'

import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = () => {
    const { promiseInProgress } = usePromiseTracker();

    if (promiseInProgress) {
        return (
            <h1>Hey some async call in progress ! </h1>
        );
    }
    else {
        return (
            null
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
        <LoadingIndicator />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
