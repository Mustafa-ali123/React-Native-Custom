import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Input({focus,pcolor,place,change, value }) {
 
  return   <TextInput
  placeholderTextColor={pcolor}
  style={styles.inpt}
  placeholder={place}
  onChangeText={change}
  value={value}
    />
}

const styles = StyleSheet.create({
    inpt:{
        borderColor:"darkgray" ,
        borderColor:"#003566" ,
        width:320,
        borderWidth:2,     
        fontSize:25,
        borderRadius:8,
        fontStyle:"italic",
        color:"black"           
    },
 
})