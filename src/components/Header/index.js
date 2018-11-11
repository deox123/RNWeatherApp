// @flow

// flow-disable-next-line
import * as React from 'react';
// flow-disable-next-line
import {Text, View, TouchableHighlight, Image} from 'react-native';

import {leftArrow} from '../../../images/index';

import styles from './styles';

import type {Props} from './types';

const Header = (props: Props) => {
    const {
        title,
        onBack,
    } = props;

    console.log(onBack);

    return (
        <View style={styles.container}>
            {onBack &&
                <TouchableHighlight onPress={onBack.goBack}>
                    <Image source={leftArrow} style={styles.arrow} />
                </TouchableHighlight>
            }
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

export default Header;
