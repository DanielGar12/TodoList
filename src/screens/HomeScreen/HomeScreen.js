import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Pressable, Modal, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {username} from '../SigninScreen'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import {Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';




const HomeScreen = () => {
  const [modalState, setModalState] = useState(false)
  const [todoData, setTodoData] = useState([])
  const [date, setDate] = useState(new Date());
  const [timePicker, setTimePicker] = useState(false)

  const {control, handleSubmit, reset ,formState:{ errors }} = useForm()



  useEffect(() => {
    const fetchTodos = async () => {
        const userId = await AsyncStorage.getItem('userId');
        try {
            const response = await fetch(`http://localhost:3000/todos?user=${userId}`); 
            const data = await response.json();
            setTodoData(data); 
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    fetchTodos();
}, []); 




const submit = async (data) => {
  const userId = await AsyncStorage.getItem('userId');
  const todoWithDate = { ...data, dueDate: date.toLocaleDateString(), user: userId }; 
  console.log("Todo Data Being Sent:", todoWithDate); // Log the data

  try {
      const response = await fetch('http://localhost:3000/todos', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(todoWithDate),
      });

      if (!response.ok) {
          throw new Error('Failed to save todo');
      }

      const result = await response.json();
      setTodoData((prevList) => [...prevList, result.todo]); // Use the saved todo from the response
      setModalState(false);
      reset();
  } catch (error) {
      console.error('Error:', error);
      // Handle error feedback to the user here
  }
};




  const displayList = ({ item }) => {
    return(
    <View style={styles.todoDisplay}>
                    <Menu>
                    <MenuTrigger>
                    <Ionicons name='ellipsis-vertical' size={25}/>
                    </MenuTrigger>
                    <MenuOptions>
          <MenuOption  text="Edit" />
          <MenuOption  text="Delete" />
        </MenuOptions>
                    </Menu>
                    <Text style={styles.textStyle2}>{item.title || 'No title provided'}</Text>
                    <Text style={styles.textStyle3}>{item.description || 'No description provided'}</Text>
                    <Text style={styles.textStyle2}>{item.dueDate || 'No date provided'}</Text>
                    <Ionicons name='checkmark' size={25} color='blue'/>
                </View>
    )
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setTimePicker(false);
    setDate(currentDate);
  };


  return (
    <MenuProvider>
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
        placeholder='Input titles'
        control={control}
        name={'title'}
        rules={{required: 'Name of task is required'}}
        />
        <Text style={styles.textStyle2}>Task Descirption</Text>
        <CustomInput 
        placeholder='Input description'
        control={control}
        name={'description'}
        rules={{required: false}}
        />
        <Text style={styles.textStyle2}>Due Date</Text>
        <Pressable style={styles.timeContainer} onPress={() => setTimePicker(true)}>
          <Text> {date.toLocaleDateString()} </Text>
        {/* <CustomInput 
        placeholder='Input date'
        control={control}
        name={'date'}
        rules={{required: 'Date is required'}}
        />  */}
        {timePicker && (
        <DateTimePicker
        value={date}
        mode="date"
        display="default"
        onChange={onChange}
    />
)}
        </Pressable>

        <CustomButton text={'Create Task'} onPress={handleSubmit(submit)}/>

      </View>   
      </Modal>

        <Text style={styles.textStyle1}>Home</Text> 
        <Ionicons name={'add'} size={20} color={'blue'} onPress={() => setModalState(true)}/>
      </View>
      <Text></Text>
      <Text>Welcome {username}</Text>

      <FlatList
        data={todoData} // Pass the todoList array
        renderItem={displayList} // Render each todo item
        keyExtractor={(item, index) => index.toString()} // Use index as key
      />

        
    </View>
    </MenuProvider>
    
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
        color: 'black',
        fontWeight: 'bold'


    },

    todoDisplay: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      marginVertical: 5,
      color: 'white'
    },

    textStyle3: {
      color: 'gray',
      fontSize: 12
    },

    timeContainer: {
      backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 5,
  },


})

export default HomeScreen;