import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
  
 
import Home from './HomeScreen';
import Details from "./DetailsScreen";
import ModalScreen from "./ModalScreen";




const MainStack = createStackNavigator(
    {
        Home,
        Details
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
    
);


const RootStack = createStackNavigator(
  {
   Main: {
     screen: MainStack
   },
   MyModal: {
     screen: ModalScreen

   },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
  
);


const Tabs = createBottomTabNavigator({ 
    Main: {
      screen: RootStack
    },
  Home, 
  Details});
export default routes = createAppContainer(Tabs);

