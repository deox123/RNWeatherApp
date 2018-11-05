// @flow

import {getWeather} from './actions';

export type hourlyWeather = {
    real_feel: number,
    temperature: number,
    precipitation: number,
    description_flag: string,
    wind: number,
};

export type dayWeather = {
    date: string,
    morning_temperature: number,
    real_feel: number,
    precipitation: number,
    rain: number,
    temperature: number,
    max_uv_index: number,
    sunrise_time: string,
    sunset_time: string,
    hourly: any,
};

export type dayRange = {
    start: string,
    end: string,
};

export type errorRes = any;

export type weatherData = Array<dayWeather>;

export type Props = {
    actions: {
        getWeather: typeof getWeather,
    },
    weather: weatherData,
    isFetching: boolean,
};

export type State = {

}

export type Store = {
    weather: weatherData,
    isFetching: boolean,
};

export type Action =
    | {type: 'GET_WEATHER', params: dayRange}
    | {type: 'GET_WEATHER_FULFILLED', weather: weatherData}
    | {type: 'GET_WEATHER_REJECTED', error: errorRes}
