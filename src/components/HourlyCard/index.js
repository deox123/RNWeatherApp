// @flow

// flow-disable-next-line
import * as React from 'react';
// flow-disable-next-line
import {Text, View, Image} from 'react-native';
import {format} from 'date-fns';

import styles from './styles';

import type {Props} from './types';


const icon = require('../../../images/partly_sunny.png');

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
        const aaa = currentHour + cardHour + 1;
        return aaa <= 12 ? `${aaa} AM` : `${aaa % 12} PM`;
    }

    return (
        <View>
            <Text style={styles.day}>{renderTitle()}</Text>
        </View>
    );
};

export default Header;
