// @flow

// flow-disable-next-line
import * as React from 'react';
// flow-disable-next-line
import {Text, View, TouchableHighlight, Image} from 'react-native';
import {format, isToday} from 'date-fns';
import {getDescriptionFlag} from '../../utils/helperFunctions';

import styles from './styles';

import type {Props} from './types';

import images, {rightArrow} from '../../../images/index';

const CurrentDay = (props: Props) => {
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
        hourly,
    } = props.weather;


    const clickHandler = props.onClick;

    const renderTitle = (d: string): string => {
        let title = '';
        title = isToday(d) ? 'Today, ' : '';
        title += format(d, 'MMMM D');
        return title.toUpperCase();
    };

    const descriptionFlag = getDescriptionFlag(hourly);

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
                        source={images[descriptionFlag]}
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
            <TouchableHighlight  activeOpacity={100} underlayColor="white" onPress={clickHandler}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>SEE HOURLY</Text>
                    <Image source={rightArrow} style={styles.arrow} />
                </View>
            </TouchableHighlight>
        </View>
    );
};

export default CurrentDay;
