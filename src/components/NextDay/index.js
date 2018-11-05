// @flow

// flow-disable-next-line
import * as React from 'react';
// flow-disable-next-line
import {Text, View, TouchableHighlight} from 'react-native';
import {format} from 'date-fns';

import styles from './styles';

import type {Props} from './types';

const Header = (props: Props) => {
    const {
        date,
        real_feel,
        morning_temperature,
        temperature,
    } = props.weather;

    const renderTitle = (d: string): string => format(d, 'ddd, MMMM D').toUpperCase();

    return (
        <View style={styles.container}>
            <Text>{renderTitle(date)}</Text>
            <Text>{temperature}/{morning_temperature}</Text>
            <Text>RealFeel: {real_feel}</Text>
        </View>
    );
};

export default Header;
