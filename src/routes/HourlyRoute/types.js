// @flow

export type hourly = {
    description_flag: string,
    precipitation: number,
    real_feel: number,
    temperature: number,
    wind: number,
};

export type State = {
    firstPage: Array<hourly>,
    nextPage: Array<hourly>,
    hoursOnNextPage: number,
    firstHour: number,
};

export type Props = {
    navigation: any,
};
