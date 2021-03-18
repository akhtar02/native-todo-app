import React, {useState} from 'react'
import {StyleSheet, TouchableOpacity, Text, View, TextInput, Button} from 'react-native';

export default function AddTodos({submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler = (val) =>{
        setText(val);
    }
  return (
    <View>
        <TextInput fsfsdfsdf
        styles={styles.inputs}
        placeholder ='add Items..'
        onChangeText ={changeHandler}
        value={text}
        /> 

    <Button  onPress={()=> submitHandler(text)} title="Add Item" color='#A833FF' />
    </View>
  )
}

const styles = StyleSheet.create({
  inputs: {
    paddingHorizontal: 16,
    marginBottom: 35,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    width: 300,
    fontSize:23,
    
  },
  btn:{
      margin: 20,
      height: 40,
  }
});