// @flow

import type {
    weatherData,
    errorRes,
    dayRange,
} from './types';

export const GET_WEATHER = 'GET_WEATHER';
export const GET_WEATHER_FULFILLED = 'GET_WEATHER_FULFILLED';
export const GET_WEATHER_REJECTED = 'GET_WEATHER_REJECTED';

export function getWeather(params: dayRange) {
    return {
        type: GET_WEATHER,
        params,
    };
}

export function getWeatherFulfilled(weather: weatherData) {
    return {
        type: GET_WEATHER_FULFILLED,
        weather,
    };
}

export function getWeatherRejected(error: errorRes) {
    return {
        type: GET_WEATHER_REJECTED,
        error,
    };
}
