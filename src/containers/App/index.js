// @flow

import React from 'react';
import {createStackNavigator} from 'react-navigation';

import Home from '../../routes/HomeRoute/index';
import Hourly from '../../routes/HourlyRoute/index';

/**
 * The root container for the React app.
 * Holds the defined routes for the app.
 */
const App = () => (
    <AppRoutes />
);

const AppRoutes = createStackNavigator(
    {
        Home,
        Hourly,
    },
    {
        initialRouteName: 'Home',
        // tabBarOptions: {
        //     activeTintColor: '#FFFFFF',
        //     activeBackgroundColor: '#AD172B',
        //     showLabel: false,
        //     style: {height: 60, backgroundColor: '#56565A'},
        //     tabStyle: {
        //         borderWidth: 0.5,
        //         borderColor: '#929292',
        //     },
        // },
    },
);

export default App;
