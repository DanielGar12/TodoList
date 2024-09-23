import React, {useState} from 'react'
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {username} from '../SigninScreen'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import {useForm} from 'react-hook-form'




const HomeScreen = () => {
  const [modalState, setModalState] = useState(false)

  const {control, handleSubmit, formState:{errors}} = useForm()


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
        <CustomInput 
        placeholder={'Input titles'}
        control={control}
        name={'title'}
        rules={{required: 'Name of task is required'}}
        />
        <Text style={styles.textStyle2}>Task Descirption</Text>
        <CustomInput 
        placeholder={'Input description'}
        control={control}
        name={'description'}
        rules={{required: false}}
        />
        <Text style={styles.textStyle2}>Due Date</Text>
        <CustomInput 
        placeholder={'Input date'}
        control={control}
        name={'Date'}
        rules={{required: 'Date is required'}}
        /> 
        <CustomButton text={'Create Task'} onPress={() => handleSubmit(setModalState(false))}/>

      </View>   
      </Modal>
        <Text style={styles.textStyle1}>Home</Text> 
        <Ionicons name={'add'} size={20} color={'blue'} onPress={() => setModalState(true)}/>
      </View>
      <Text></Text>
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