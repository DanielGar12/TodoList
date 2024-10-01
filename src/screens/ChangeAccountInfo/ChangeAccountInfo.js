import { View, Text, StyleSheet, TextInput, Pressable  } from 'react-native'
import React from 'react'
import {useForm, Controller} from 'react-hook-form'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomInput from '../../components/CustomInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';




const ChangeAccountInfo = ({route}) => {
    const navigation = useNavigation()

    const {username} = route.params;

    const {control, handleSubmit, formState: {errors}} = useForm();

    const onSubmitPress = async (data) => {
        const userId = await AsyncStorage.getItem('userId');
        
        if (!userId) {
            console.error('No userId found in AsyncStorage');
            return; // Handle error case where userId is missing
        }
        
        try {
            const response = await fetch(`http://localhost:3000/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: data.firstname,
                    lastName: data.lastname,
                    username: data.username,
                    password: data.password,
                }),
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log('User updated successfully:', result);
                navigation.navigate('BottomNavBar', { username: data.username }); 

            } else {
                const errorData = await response.json();
                console.error('Failed to update user:', errorData);
                console.error('Raw response:', await response.text());
            }
        } catch (error) {
            console.error('Error occurred during the update:', error);
        }
    };
    
    
    
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Change Information</Text>
      <Text></Text>
      <Text>First Name</Text>
      <CustomInput 
            control={control}
            name={'firstname'}
            rules={{required: 'First name is required'}}
            placeholder='First Name' 
            />
      <Text>Last Name</Text>
      <CustomInput 
            control={control}
            name={'lastname'}
            rules={{required: 'Last name is required'}}
            placeholder='Last Name' 
            />
      <Text>Username</Text>
      <CustomInput 
            control={control}
            name={'username'}
            rules={{required: 'Username is required'}}
            placeholder='Username' 
            />
      <Text>Password</Text>
      <CustomInput 
            control={control}
            name={'password'}
            rules={{required: 'password is required'}}
            placeholder='Password' 
            secureTextEntry={true}
            />
      <CustomButton text={'Submit'} onPress={handleSubmit(onSubmitPress)}/>
      <Pressable style={styles.container} onPress={() => navigation.navigate('BottomNavBar', { username: username }) }>
        <Text style={styles.buttonText}>Cancel</Text>
      </Pressable>

    </View>
  )
}

export default ChangeAccountInfo;

const styles = StyleSheet.create({

    root: {
        padding: 40,

    },

    title: {
        fontWeight: 'bold',
        fontSize: 22
    },

    container: {
    
        backgroundColor: 'white',
        
        width: '100%',
        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    buttonText: {
        color: 'red'
    }


});