// @flow
import {format} from 'date-fns';

export const getDescriptionFlag = (hourly: any, nextDay: boolean = false): string => {
    if (nextDay) {
        return hourly.PM[1].description_flag;
    }
    const now = new Date();
    const currentHour24 = +format(now, 'H') + 1;
    const currentHour12 = currentHour24 > 12 ? currentHour24 % 12 : currentHour24;
    return hourly[format(now, 'A')][currentHour12].description_flag;
};

export const a = 'asd';
