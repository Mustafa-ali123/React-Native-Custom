import Input from '../Componet/Input'
import React, { useState } from 'react'
import Buttons from '../Componet/Buttons'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import {Icon} from "react-native-vector-icons/MaterialIcons"
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native'

export default function Login({navigation}) {
  let [data, setdata] = useState([])

  const login = () =>{
    auth().signInWithEmailAndPassword(data.email, data.password)
    .then(() => {
      navigation.navigate("Product")
      console.log('User account LogIn');
    }) 
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
      // navigation.navigate("Product",{data})
    });

  }

  return (
    <View style={{ flex: 1, backgroundColor: "lightgray" }}>
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.head}>Log In</Text>
        <View>
          <Text style={styles.text}>Email :</Text>
          <Input pcolor="gray" place=" Enter the Email " change={(e) => setdata({ ...data, email: e })} />
        </View>
        <View>
          <Text style={[styles.text, { marginTop: 20 }]}>Password :</Text>          
          <Input pcolor="gray" place=" Enter the Password " change={(e) => setdata({ ...data, password: e })} />
        </View>
        <Buttons press={login} text="Log In" />
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    borderRadius: 20
  },
  container: {
    marginTop:25,
    margin: 20,
    backgroundColor: "#f6fff8",
    flex: 1,
    alignItems: 'center',
    elevation: 15,
    borderRadius:20,
    borderColor:'#003566',
    borderWidth:2    
  },
  head: {
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: "italic",
    marginTop: "5%",
    paddingTop: 40,
    marginBottom: "6%",
    color: "black"
  },
  text: {
    fontSize: 30,
    fontStyle: "italic",
    marginBottom: 5,
    color: "black"

  }
})