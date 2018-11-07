// @flow

import type {hourly} from '../../routes/HourlyRoute/types';

export type Props = {
    weather: hourly,
    currentHour: number,
    cardHour: number,
};
