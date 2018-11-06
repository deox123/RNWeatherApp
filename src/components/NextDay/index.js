// @flow

// flow-disable-next-line
import * as React from 'react';
// flow-disable-next-line
import {Text, View, TouchableHighlight, Image} from 'react-native';
import {format} from 'date-fns';

import styles from './styles';

import type {Props} from './types';

const icon = require('../../../images/partly_sunny.png');

const Header = (props: Props) => {
    const {
        date,
        real_feel,
        morning_temperature,
        temperature,
    } = props.weather;

    const renderTitle = (d: string): string => format(d, 'ddd, MMM D').toUpperCase();

    return (
        <View style={styles.container}>
            <Text style={styles.day}>{renderTitle(date)}</Text>
            <Image
                source={icon}
                style={styles.icon}
            />
            {/* <Text style={styles.temp}><Text style={styles.bigTemp}>{temperature}°</Text>/ {morning_temperature}°</Text> */}
            <View style={styles.temperatures}>
                <Text style={styles.maxTemp}>{temperature}°</Text>
                <Text style={styles.minTemp}>/ {morning_temperature}°</Text>
            </View>
            <Text style={styles.realTemp}>RealFeel: {real_feel}°</Text>
        </View>
    );
};

export default Header;
