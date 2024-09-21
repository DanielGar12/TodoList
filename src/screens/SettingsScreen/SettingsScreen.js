import { View, Text, StyleSheet, Alert, Pressable} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
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
      <Pressable style={styles.horizontalView} onPress={() => console.log('Nothing yet')}>
      <View style={styles.view2}>
        <Ionicons name={'person'} size={30}/>
        <Text style={styles.textStyle2}>Account Information</Text>
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