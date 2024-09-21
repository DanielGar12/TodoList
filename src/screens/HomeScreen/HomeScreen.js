import React, {useState} from 'react'
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {username} from '../SigninScreen'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'




const HomeScreen = () => {
  const [modalState, setModalState] = useState(false)

  return (
    <View style={styles.root}>
      <View style={styles.view1}>
      <Modal visible={modalState}
      animationType={'slide'}
      presentationStyle={'formSheet'}
      >
        <View style={styles.modalView}>
        <Ionicons name={'close'}
        size={15} 
        onPress={() => setModalState(false)}
        />
        <Text style={styles.textStyle1}>Add Todo</Text>
        <Text style={styles.textStyle2}>Task Title</Text>
        <CustomInput placeholder={'Input titles'}/>
        <Text style={styles.textStyle2}>Task Descirption</Text>
        <CustomInput placeholder={'Input description'}/>
        <Text style={styles.textStyle2}>Due Date</Text>
        <CustomInput placeholder={'Input date'}/> 
        <CustomButton text={'Create Task'} onPress={() => setModalState(false)}/>

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

    modalView: {
      padding: 40,

    },

    textStyle1: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black'
    },

    textStyle2: {
        fontSize: 16,
        color: 'black'


    }


})

export default HomeScreen;