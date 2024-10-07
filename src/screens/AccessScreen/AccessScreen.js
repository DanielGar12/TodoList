import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import {useForm} from 'react-hook-form'
import { useNavigation } from '@react-navigation/native';


const AccessScreen = ({ route }) => {
  
    const {control, handleSubmit, formState:{errors}} = useForm();
    const navigation = useNavigation();
    const { username } = route.params;
    const onSubmit = async (data) => {
        console.log('Password submitted:', data.password); // Log submitted password

        try {
            const response = await fetch('http://localhost:3000/validate-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password: data.password }), // Use the captured password
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Password is valid:', result);
                // Proceed with account change
                navigation.navigate('Change Account Information', {username: username}); // Example navigation
            } else {
                console.error('Password validation failed:', result);
                alert('Invalid password. Please try again.');
            }
        } catch (error) {
            console.error('Error during password validation:', error);
            alert('An error occurred. Please try again later.');
        }
    };
    
    

  
    return (
    <View style={styles.root}>

    <View style={styles.view2}>
      <Text style={styles.title}>Access Screen</Text>
      <Text></Text>
    </View>
      <Text style={styles.text1}>Input Password</Text>
      <CustomInput
      placeholder={'Password'}
      control={control}
      rules={{required: 'Must input password'}}
      name={'password'}
      secureTextEntry={true}
      />

      <CustomButton text="Submit" onPress={handleSubmit(onSubmit)}/>

      <Text>You must input your password to change your account</Text>
      <Button title={'back'} onPress={() => navigation.navigate('BottomNavBar', { username: username })}>
      </Button>
      
    </View>
    
    
  )
}

export default AccessScreen

const styles = StyleSheet.create({

    
    root: {
        padding: 30,

    },
    view2: {

        padding: 30,
        alignItems: 'center'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    text1: {
        fontSize: 16
    }



});