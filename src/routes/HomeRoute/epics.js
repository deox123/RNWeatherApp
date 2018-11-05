// @flow

import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';

import getJSON from '../../utils/http';
import params from '../../utils/params';

import type {
    weatherData,
    errorRes,
} from './types';

import {
    GET_WEATHER,
    getWeatherFulfilled,
    getWeatherRejected,
} from './actions';

export const fetchWeatherEpic = (action$: Observable<any>): Observable<any> =>
    action$.ofType(GET_WEATHER)
        .mergeMap((action) => {
            const {
                start,
                end,
            } = action.params;
            return getJSON(`${params.API_ROOT}weather_data?start_date=${start}&end_date=${end}`)
                .mergeMap((res: weatherData) => Observable.of(getWeatherFulfilled(res)))
                .catch((err: errorRes) => Observable.onErrorResumeNext(
                    Observable.of(getWeatherRejected(err)),
                ));
        });

export default combineEpics(
    fetchWeatherEpic,
);
