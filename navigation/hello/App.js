import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "./src/HomeScreen";
import Details from "./src/DetailsScreen";

const RootStack = createStackNavigator(
  {
    Home,
    Details,
  },
  // {
  //   initialRouteName: 'HomeScreen',
  // }
);

const AppContainer = createAppContainer(RootStack);

export default function App()  {
    return <AppContainer />;
}