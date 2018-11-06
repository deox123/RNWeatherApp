// @flow

// flow-disable-next-line
import * as React from 'react';
// flow-disable-next-line
import {Text, View, TouchableHighlight, Image} from 'react-native';
import {format, isToday} from 'date-fns';

import styles from './styles';

import type {Props} from './types';

const icon = require('../../../images/partly_sunny.png');

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
        // descritpion_flag,
    } = props.weather;

    const renderTitle = (d: string): string => {
        let title = '';
        title = isToday(d) && 'Today, ';
        title += format(d, 'MMMM D');
        return title.toUpperCase();
    };

    // let icon;
    // switch(descritpion_flag) {
    //     case 'partly_sunny':
    //         icon = require('images/partly_sunny');
    //         break;

    //     case 'rain':
    //         icon = require('./my-icon-active.png');
    // }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.heading}>{renderTitle(date)}</Text>
                <View style={styles.mainColumns}>
                    <View style={styles.mainLeft}>
                        <View style={styles.temperatures}>
                            <Text style={styles.maxTemp}>{temperature}°</Text>
                            <Text style={styles.minTemp}>/ {morning_temperature}°</Text>
                        </View>
                        <Text style={styles.description}>Partly sunny</Text>
                    </View>
                    <Image
                        source={icon}
                        // style={styles.icon}
                    />
                </View>
            </View>
            <View style={styles.details}>
                <View style={styles.detailsLeft}>
                    <Text style={styles.detailsText}>ReelFeel: {real_feel}°</Text>
                    <Text style={styles.detailsText}>Precipitation: {precipitation}%</Text>
                    <Text style={styles.detailsText}>Max UV Index: {max_uv_index}</Text>
                    <Text style={styles.detailsText}>Rain: {rain}mm</Text>
                </View>
                <View style={styles.detailsRight}>
                    <Text style={styles.detailsText}><Text style={styles.grayText}>Sunrize:</Text> {sunrise_time} AM</Text>
                    <Text style={styles.detailsText}><Text style={styles.grayText}>Sunset:</Text> {sunset_time} PM</Text>
                </View>
            </View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>SEE HOURLY</Text>
            </View>
        </View>
    );
};

export default Header;
