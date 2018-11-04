// @flow

import React from 'react';
import {Provider} from 'react-redux';
// import '../../ReactotronConfig';

import store from '../store/index';

import App from './App/index';

export default function Root() {
    return (
        <Provider store={store}>
            <App className="container" />
        </Provider>
    );
}
