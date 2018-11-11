// @flow

// flow-disable-next-line
import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// flow-disable-next-line
import {View, ActivityIndicator} from 'react-native';

import {format, addDays} from 'date-fns';

import {getWeather} from './actions';

import type {
    Props,
    State,
    dayRange,
} from './types';

import styles from './styles';

import Header from '../../components/Header/index';
import CurrentDay from '../../components/CurrentDay/index';
import NextDay from '../../components/NextDay/index';

export class Home extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {

        };

        this.viewHourly = this.viewHourly.bind(this);
        this.changeCurrentDay = this.changeCurrentDay.bind(this);
    }

    static navigationOptions = {
        header: <Header title="Weather Forecast" />,
    };

    componentDidMount() {
        const data: dayRange = {
            start: format(new Date(), 'YYYY-MM-DD'),
            end: format(addDays(new Date(), 4), 'YYYY-MM-DD'),
        };
        this.props.actions.getWeather(data);
    }

    prepareDate = date => ({
        start: format(date, 'YYYY-MM-DD'),
        end: format(addDays(date, 4), 'YYYY-MM-DD'),
    })

    changeCurrentDay = (day: weather) => () => {
        this.props.actions.getWeather(this.prepareDate(day));
    }

    viewHourly = () => this.props.navigation.navigate('Hourly', {
            AM: {...this.props.weather[0].hourly.AM},
            PM: {...this.props.weather[0].hourly.PM},
            date: this.props.weather[0].date,
        })

    render() {
        const {
            isFetching,
            weather,
        } = this.props;

        return (
            <View style={styles.container}>
                {isFetching
                    ? <ActivityIndicator size="large" color="blue" />
                    : <View style={{flex: 1}}>
                        <CurrentDay weather={weather[0]} onClick={this.viewHourly} />
                        <View style={styles.nextThreeDays}>
                            {weather.map((day, index) => index !== 0 ? 
                                <NextDay
                                    weather={day}
                                    key={day.date}
                                    onPress={this.changeCurrentDay(day.date)} />
                                    : null)}
                        </View>
                    </View>
                }
            </View>
        );
    }
}

const mapStateToProps = ({
    HomeRoute: {
        weather,
        isFetching,
    },
}) => ({
    weather,
    isFetching,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getWeather,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
