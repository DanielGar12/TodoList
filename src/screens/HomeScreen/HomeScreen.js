import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BottomTabNavigation from '../../navigation/BottomTabNavigation'


const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.textStyle1}>Home</Text> 
     {/* <BottomTabNavigation/>  */}
     
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

export default HomeScreen