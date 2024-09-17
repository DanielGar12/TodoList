import React, {useState} from 'react';
import { View, Image, StyleSheet, useWindowDimensions, Text } from 'react-native';
import Logo from '../../../assets/images/react-native-1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = () => {
    const { height } = useWindowDimensions(); // Destructure height from useWindowDimensions

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastName] = useState('');
    const navigation = useNavigation();

    const onLoginPressed = () => {navigation.navigate('LogIn')}
    const onRegisterPressed = () => {console.log('Nothing yet')}
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
            value={firstname}
            setValue={setFirstname}
            />

            <CustomInput
            placeholder='Last Name'
            value={lastname}
            setValue={setLastName}
            />
            
            <CustomInput 
            placeholder='Username' 
            value={username} 
            setValue={setUsername}
            />

            <CustomInput 
            placeholder='Password' 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true}
            />
            <CustomButton text='Register' onPress={onRegisterPressed}/>

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
