// @flow

// flow-disable-next-line
import * as React from 'react';
// flow-disable-next-line
import {Text, View, TouchableHighlight} from 'react-native';

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
            firstHour: 0,
        };

        this.showNextHours = this.showNextHours.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: <Header title={format(navigation.getParam('date', 'Weather Forecast'), 'dddd, MMMM D')} />,
        };
    };

    static getDerivedStateFromProps(props: Props, state: State) {
        if (!state.firstPage.length) {
            const firstHour = getHours(new Date());
            const am = props.navigation.getParam('AM', []);
            const pm = props.navigation.getParam('PM', []);
            const arr = [];
            for (let i = 12; i > 0; i--) {
                const pmIndex = 13 - i;
                arr.push(am[i]);
                arr.unshift(pm[pmIndex]);
            }
            return {
                firstPage: arr.slice(firstHour, firstHour + 8),
                nextPage: arr.slice(firstHour + 8),
                firstHour,
            };
        }
        // CHECK THIS OUT FFS
        return null;
    }

    showNextHours = (): void => {
        const firstHour = this.state.firstHour + 8;
        this.setState(prevState => ({
                firstPage: prevState.nextPage.slice(0, 8),
                nextPage: prevState.nextPage.slice(8),
                firstHour,
        }));
    }

    renderButtonTitle = (numberOfHoursToShow: number): string => {
        return numberOfHoursToShow && numberOfHoursToShow <= 8 ? `Show next ${numberOfHoursToShow} hours` : 'Show next 8 hours';
    }

    render() {
        const hoursLeft = this.state.nextPage.length;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hourly View</Text>
                <View style={styles.cardContainer}>
                    {this.state.firstPage.map((hourly, index) => (
                        <HourlyCard
                            cardHour={index}
                            currentHour={this.state.firstHour}
                            weather={hourly}
                            key={index}
                        />),
                    )}
                </View>
                {!!hoursLeft &&
                    <TouchableHighlight style={styles.button} onPress={this.showNextHours}>
                        <Text style={styles.buttonTitle}>
                            {this.renderButtonTitle(hoursLeft)}
                        </Text>
                    </TouchableHighlight>
                }
            </View>
        );
    }
}

export default Hourly;
