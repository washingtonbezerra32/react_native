import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from "./DetailsScreen";

const RootStack = createStackNavigator(
    {
        HomeScreen,
        DetailsScreen
    },
    {
        initialRouteName: 'Home'
    }

);

export default routes = createAppContainer();

