import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'


export default function Button({ text,press,styl }) {
  return <TouchableOpacity onPress={press}>
    <Text style={[styles.but,styl]}>{text}</Text>
  </TouchableOpacity>
}
let styles = StyleSheet.create({
  but: {
    backgroundColor:"black",
    fontWeight:"bold",
    fontStyle:"italic",
    height:50,
    width:250,
    fontSize:25,
    borderRadius:22 ,    
    marginVertical:35,
    textAlign:'center',
    textAlignVertical:'center',  
    backgroundColor:"white",
    color:"#003566",
    borderColor:"#003566",
    borderWidth:2,  
    elevation:15,      

  }
})