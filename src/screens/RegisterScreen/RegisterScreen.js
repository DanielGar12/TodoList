import React, {useState} from 'react';
import { View, Image, StyleSheet, useWindowDimensions, Text, Alert } from 'react-native';
import Logo from '../../../assets/images/NLogo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';


const RegisterScreen = () => {
    const { height } = useWindowDimensions(); // Destructure height from useWindowDimensions

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [firstname, setFirstname] = useState('');
    // const [lastname, setLastName] = useState('');
    const {control, handleSubmit, formState:{errors}} = useForm();
    const navigation = useNavigation();

    const onLoginPressed = () => {navigation.navigate('LogIn')}
    const onRegisterPressed = async (data) => {

        try{

            const response = await axios.post('http://localhost:3000/users', {

                firstName: data.firstName,
                lastName: data.lastName,
                username: data.username,
                password: data.password,
            })

            if (response.status === 201) {
                Alert.alert('Success', 'User registered successfully!');
                navigation.navigate('LogIn'); // Navigate to login screen
            } else {
                Alert.alert('Error', 'Something went wrong during registration.');
            }

        }
        catch (error){

            console.error('Registration error:', error);
            Alert.alert('Error', error.response?.data?.error || 'Failed to register. Please try again.');



        }
        

    }
    return (
        <View style={styles.root}>
            
            <Image 
                source={Logo} 
                style={[styles.logo, { height: height * 0.3 }]} // Use dynamic height
                resizeMode='contain' // Correct resizeMode
            />
            <Text>Welcome</Text>
            
        
            <CustomInput
            placeholder='First Name'
            control={control}
            name={'firstName'}
            rules={{required: 'First name is required'}}
            />

            <CustomInput
            placeholder='Last Name'
            control={control}
            name={'lastName'}
            rules={{required: 'Last name is required'}}
            />
            
            <CustomInput 
            placeholder='Username' 
            control={control}
            name={'username'}
            rules={{required: 'Username is required'}}
            />

            <CustomInput 
            placeholder='Password' 
            control={control}
            name={'password'}
            rules={{required: 'Password is required'}}
            secureTextEntry={true}
            />
            <CustomButton text='Register' onPress={handleSubmit(onRegisterPressed)}/>

            <Text></Text>
            <Text></Text>


            <Text>Already have an account?</Text>

            <CustomButton text='Log In' onPress={onLoginPressed}/>

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

export default RegisterScreen;
