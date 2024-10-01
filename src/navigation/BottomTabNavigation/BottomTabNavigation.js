import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();
const BottomTabNavigation = ({route}) => {
  
  const { username } = route.params || { username: '' };
  
  return (
      
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }
  
              // Return the icon component
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: { paddingBottom: 5, fontSize: 15 },
            tabBarStyle: { padding: 10, height: 60 },
            headerShown: false,
          })}
        >
          <Tab.Screen name='Home' children={() => <HomeScreen username={username} />} />
          <Tab.Screen name='Settings' children={() => <SettingsScreen username={username}/>} />
        </Tab.Navigator>

    );
  };
export default BottomTabNavigation;