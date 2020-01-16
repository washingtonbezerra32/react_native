import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './HomeScreen';
import Details from "./DetailsScreen";

const RootStack = createStackNavigator(
    {
        Home,
        Details
    },
    
);

export default routes = createAppContainer(RootStack);

