// @flow

// flow-disable-next-line
import * as React from 'react';
// flow-disable-next-line
import {Text, View, TouchableHighlight, Image} from 'react-native';
import {format} from 'date-fns';
import {getDescriptionFlag} from '../../utils/helperFunctions';

import styles from './styles';

import type {Props} from './types';

import images from '../../../images/index';

const Header = (props: Props) => {
    const {
        date,
        real_feel,
        morning_temperature,
        temperature,
        hourly,
    } = props.weather;

    const descriptionFlag = getDescriptionFlag(hourly, true);

    const pressHandler = props.onPress;

    const renderTitle = (d: string): string => format(d, 'ddd, MMM D').toUpperCase();

    return (
        <TouchableHighlight style={styles.container} onPress={pressHandler}>
            <View >
                <Text style={styles.day}>{renderTitle(date)}</Text>
                <Image
                    source={images[descriptionFlag]}
                    style={styles.icon}
                />
                <View style={styles.temperatures}>
                    <Text style={styles.maxTemp}>{temperature}°</Text>
                    <Text style={styles.minTemp}>/ {morning_temperature}°</Text>
                </View>
                <Text style={styles.realTemp}>RealFeel: {real_feel}°</Text>
            </View>
        </TouchableHighlight>
    );
};

export default Header;
