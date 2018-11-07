// @flow

// flow-disable-next-line
import * as React from 'react';
// flow-disable-next-line
import {Text, View} from 'react-native';

import {format, isToday, getHours} from 'date-fns';

import styles from './styles';

import type {
    Props,
    State,
} from './types';

import Header from '../../components/Header/index';
import HourlyCard from '../../components/HourlyCard/index';

export class Hourly extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {
            firstPage: [],
            nextPage: [],
            hoursOnNextPage: 0,
            firstHour: 1,
        };
    }

    static navigationOptions = {
        header: <Header title="Weather Forecast" />,
    };

    static getDerivedStateFromProps(props: Props) {
        const firstHour = 10;
        const am = props.navigation.getParam('AM', []);
        const pm = props.navigation.getParam('PM', []);
        const arr = [];
        for (let i = 1; i < 13; i++) {
            arr.push(am[i]);
        }
        for (let i = 1; i < 13; i++) {
            arr.push(pm[i]);
        }
        console.log(arr.slice(firstHour, firstHour + 8))
        console.log(arr.slice(firstHour + 9))
        return {
            firstPage: arr.slice(firstHour, firstHour + 8),
            nextPage: arr.slice(firstHour + 9),
            firstHour,
        };
    }

    render() {
        return (
            <View>
                <Text>Hourly View</Text>
                <Text>{this.state.firstHour}</Text>
                <Text>{this.state.nextPage.length}</Text>
                {this.state.firstPage.map((hourly, index) =>
                    <HourlyCard cardHour={index} currentHour={this.state.firstHour} weather={hourly} key={index} />)}
            </View>
        );
    }
}

export default Hourly;
