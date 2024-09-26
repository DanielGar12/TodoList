import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from '../screens/SigninScreen/SignInScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BottomTabNavigation from './BottomTabNavigation/BottomTabNavigation';


const Stack = createNativeStackNavigator();
const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="LogIn" component={SigninScreen}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
                <Stack.Screen name="BottomNavBar" component={BottomTabNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>        

    );
}

export default Navigation;