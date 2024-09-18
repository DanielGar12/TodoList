import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
    navigation= useNavigation();
    const onRegisterPressed = () => {navigation.navigate('LogIn')}
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
        fontSize: 30
    }


})
export default SettingsScreen;