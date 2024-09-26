import { View, Text, StyleSheet, Alert, Pressable} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';
const SettingsScreen = () => {
    navigation= useNavigation();
    const onRegisterPressed = () => {Alert.alert('SIGN OUT', 'Are you sure you want to sign out?', [{
      text: 'Cancel',
      
    },
    {
    text: 'Sign Out',
    onPress: async () => {
      try {
        //await AsyncStorage.removeItem('userId'); // Clear the user ID or any other data
        navigation.navigate('LogIn'); // Navigate back to the login screen
      } catch (error) {
        console.error('Error signing out:', error);
      }
    }
   
    }
  ])}

  

  return (
    <View style={styles.root}>
      <Text style={styles.textStyle1}>Settings</Text>
     
      <Pressable style={styles.horizontalView} onPress={() => onRegisterPressed()}>
      <View style={styles.view2}>
        <Ionicons name={'exit'} size={30}/>
        <Text style={styles.textStyle2}>Sign Out</Text>
      </View>
        <Ionicons name={'chevron-forward'} size={30}/>
      </Pressable>
      
      {/* <CustomButton
      onPress={onRegisterPressed}
      text={"Sign out"}
      /> */}
    </View>
  )
}
const styles = StyleSheet.create ({
    
    root: {
        
        padding: 40,
       

    },

    textStyle1: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black'
    },

    horizontalView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      
    },

    view2: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    textStyle2: {
      marginLeft: 10,
      fontSize: 16
    }


})
export default SettingsScreen;