// @flow

// flow-disable-next-line
import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// flow-disable-next-line
import {Text, View} from 'react-native';

import {format, addDays} from 'date-fns';

import {getWeather} from './actions';

import type {
    Props,
    State,
    dayRange,
} from './types';

import Header from '../../components/Header/index';
import CurrentDay from '../../components/CurrentDay/index';
import NextDay from '../../components/NextDay/index';

export class Positioning extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
        const data: dayRange = {
            start: format(new Date(), 'YYYY-MM-DD'),
            end: format(addDays(new Date(), 4), 'YYYY-MM-DD'),
        };
        this.props.actions.getWeather(data);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header title="Weather Forecast" />
                {!this.props.isFetching &&
                    <View style={{flex: 1}}>
                        <CurrentDay weather={this.props.weather[0]} />
                        <NextDay weather={this.props.weather[1]} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Positioning);
