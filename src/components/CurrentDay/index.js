// @flow

// flow-disable-next-line
import * as React from 'react';
// flow-disable-next-line
import {Text, View, TouchableHighlight} from 'react-native';
import {format, isToday} from 'date-fns';

import styles from './styles';

import type {Props} from './types';

const Header = (props: Props) => {
    const {
        date,
        precipitation,
        max_uv_index,
        real_feel,
        rain,
        sunrise_time,
        sunset_time,
        morning_temperature,
        temperature,
    } = props.weather;

    const renderTitle = (d: string): string => {
        let title = '';
        title = isToday(d) && 'Today, ';
        title += format(d, 'MMMM D');
        return title.toUpperCase();
    };

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text>{renderTitle(date)}</Text>
            </View>
            <View style={styles.sub}>
                <View style={styles.left}>
                    <Text>ReelFeel: {real_feel}</Text>
                    <Text>Precipitation: {precipitation}%</Text>
                    <Text>Max UV Index: {max_uv_index}</Text>
                    <Text>Rain: {rain}mm</Text>
                </View>
                <View styles={styles.right}>
                    <Text>Sunrize {sunrise_time} AM</Text>
                    <Text>Sunset {sunset_time} PM</Text>
                </View>
            </View>
            <View style={styles.button}>
                <Text>SEE HOURLY</Text>
            </View>
        </View>
    );
};

export default Header;
