import React, {useState} from 'react';
import { View, Image, StyleSheet, useWindowDimensions, Text, TextInput, Alert} from 'react-native';
import Logo from '../../../assets/images/react-native-1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native/lib/typescript/src';
import {useForm, Controller} from 'react-hook-form'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = () => {
    const { height } = useWindowDimensions(); // Destructure height from useWindowDimensions

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {control, handleSubmit, formState:{errors}} = useForm();

    const navigation = useNavigation();



    const onLoginPressed = async (data) => { 
        try{
                 const response = await axios.post('http://localhost:3000/login', {
                username: data.username,
                password: data.password,
            })

            if(response.status === 200){
                Alert.alert('Success', 'User logged in successfully');
                await AsyncStorage.setItem('userId', response.data.user._id);
                navigation.navigate('BottomNavBar')
            }
            else{
                Alert.alert('Error', 'Wrong username or password')
            }
        }
        catch(error){

            console.error('Login error:', error);
            Alert.alert('Error', error.response?.data?.error || 'Login failed. Please try again.');

        }
    }
    const onRegisterPressed = () => {navigation.navigate('Register')}

    return (
        <View style={styles.root}>
            
            <Image 
                source={Logo} 
                style={[styles.logo, { height: height * 0.3 }]} // Use dynamic height
                resizeMode='contain' // Correct resizeMode
            />
            <Text>Welcom</Text>
            <CustomInput 
            control={control}
            name={'username'}
            rules={{required: 'Username is required'}}
            placeholder='Username' 
            
            />

            <CustomInput 
            placeholder='Password' 
            control={control}
            name={'password'}
            rules={{required: 'Password is required'}}
            secureTextEntry={true}
            />

         
            <CustomButton text='Log in' onPress={handleSubmit(onLoginPressed)}/>

            <Text></Text>
            <Text></Text>


            <Text>Don't have an account?</Text>

            <CustomButton text='Register' onPress={onRegisterPressed}/>

        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%', // Specify percentage width
        maxWidth: 300, // Specify maxWidth to prevent it from being too large
        maxHeight: 200, // Keep the maxHeight to ensure it doesn't exceed screen bounds
    },
});

export default SignInScreen;
