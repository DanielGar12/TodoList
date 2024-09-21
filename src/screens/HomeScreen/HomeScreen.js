import React, {useState} from 'react'
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {username} from '../SigninScreen'




const HomeScreen = () => {
  const [modalState, setModalState] = useState(false)

  return (
    <View style={styles.root}>
      <View style={styles.view1}>
      <Modal visible={modalState}
      animationType={'slide'}
      presentationStyle={'formSheet'}
      >
        <View padding={40}>
        <Ionicons name={'close'}
        size={15} 
        onPress={() => setModalState(false)}
        />
      </View>   
      </Modal>
        <Text style={styles.textStyle1}>Home</Text> 
        <Ionicons name={'add'} size={20} color={'blue'} onPress={() => setModalState(true)}/>
      </View>

      <Text>Welcome {username}</Text>
      

        
    </View>
    
  )
}

const styles = StyleSheet.create ({

  root: {
    padding: 40,

    
  },
    
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      
        alignItems: 'center'

    },

    textStyle1: {
        fontWeight: 'bold',
        fontSize: 30
    }


})

export default HomeScreen;