import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native';


const CustomButton = ({ onPress, text }) => {

    return(
        <Pressable style={styles.container} onPress={onPress}>

            <Text style={styles.text}> {text}</Text>
        </Pressable>
    );

};

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'blue',
        
        width: '100%',
        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        color: 'white',
        fontweight: 'bold'
    }

})

export default CustomButton;
