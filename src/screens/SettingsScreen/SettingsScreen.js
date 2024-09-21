import { View, Text, StyleSheet, Alert} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
    navigation= useNavigation();
    const onRegisterPressed = () => {Alert.alert('SIGN OUT', 'Are you sure you want to sign out?', [{
      text: 'Cancel',
      
    },
    {
    text: 'Sign Out',
    onPress: () => navigation.navigate('LogIn'),

    }
  ])}
  return (
    <View style={styles.root}>
      <Text style={styles.textStyle1}>Settings</Text>
      
      
      <CustomButton
      onPress={onRegisterPressed}
      text={"Sign out"}
      />
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
    }


})
export default SettingsScreen;