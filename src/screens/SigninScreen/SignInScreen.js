import React, {useState} from 'react';
import { View, Image, StyleSheet, useWindowDimensions, Text, TextInput} from 'react-native';
import Logo from '../../../assets/images/react-native-1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native/lib/typescript/src';
import {useForm, Controller} from 'react-hook-form'

const SignInScreen = () => {
    const { height } = useWindowDimensions(); // Destructure height from useWindowDimensions

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {control, handleSubmit, formState:{errors}} = useForm();

    const navigation = useNavigation();



    const onLoginPressed = data => { console.log(data); console.log(errors); navigation.navigate('BottomNavBar')}
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
