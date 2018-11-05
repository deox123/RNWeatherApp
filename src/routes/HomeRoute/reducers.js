// @flow

import {
    GET_WEATHER,
    GET_WEATHER_FULFILLED,
    GET_WEATHER_REJECTED,
} from './actions';

import type {
    Store,
    Action,
} from './types';

const initialState = {
    weather: [],
    isFetching: true,
};

export default (state: Store = initialState, action: Action): Store => {
    switch (action.type) {
        case GET_WEATHER: {
            return {
                ...state,
                isFetching: true,
            };
        }

        case GET_WEATHER_FULFILLED: {
            return {
                ...state,
                weather: action.weather,
                isFetching: false,
            };
        }

        case GET_WEATHER_REJECTED: {
            return {
                ...state,
                isFetching: false,
            };
        }

        default:
            return state;
    }
};
