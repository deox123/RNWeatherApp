// @flow

// flow-disable-next-line
import * as React from 'react';
// flow-disable-next-line
import {Text, View, Image} from 'react-native';

import styles from './styles';

import type {Props} from './types';

import images from '../../../images/index';

const Header = (props: Props) => {
    const {
        description_flag,
        temperature,
        wind,
    } = props.weather;
    const {
        cardHour,
        currentHour,
    } = props;

    const renderTitle = (): string => {
        const hour = currentHour + cardHour + 1;
        return hour <= 12 ? `${hour} AM` : `${hour % 12} PM`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.hour}>{renderTitle()}</Text>
            <Image
                source={images[description_flag]}
                style={styles.icon}
            />
            <Text style={styles.desc}>{description_flag.replace(/_/g, ' \n')}</Text>
            <Text style={styles.temperature}>{temperature}°</Text>
            <Text style={styles.wind}>{wind} km/h</Text>
        </View>
    );
};

export default Header;
