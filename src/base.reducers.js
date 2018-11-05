// @flow

import {combineReducers} from 'redux';
import type {CombinedReducer} from 'redux';
import type {CombinedState, Action} from './index.types';

import HomeRoute from './routes/HomeRoute/reducers';

/**
 * Combines all of our reducers, using the method imported from the 'redux' package.
 */
const reducers: CombinedReducer<CombinedState, Action> = combineReducers({
    HomeRoute,
});

export default reducers;
