import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (

        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: {paddingBottom: 10, fontSize: 15},
            tabBarStyle: {padding: 10, height: 60 }
            }}>
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
   
  )
}

export default BottomTabNavigation;