// @flow

// flow-disable-next-line
import * as React from 'react';
// flow-disable-next-line
import {Text, View, TouchableHighlight} from 'react-native';
import styles from './styles';

import type {Props} from './types';

const Header = (props: Props) => {
    const {
        title,
        onBack,
    } = props;

    return (
        <View style={styles.container}>
            {onBack &&
                <TouchableHighlight onPress={onBack}>
                    <Text>Back</Text>
                </TouchableHighlight>
            }
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

export default Header;
