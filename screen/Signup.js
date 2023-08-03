import Input from '../Componet/Input'
import React, { useState } from 'react'
import Buttons from '../Componet/Buttons'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import { TouchableOpacity, View, Text, StyleSheet, Button, ScrollView } from 'react-native'

export default function Signup({ navigation }) {
  let [data, setdata] = useState([])
  let [backColor, setbackColor] = useState("gray")


  const signup = () => {
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        sendData()
        navigation.navigate("Login")
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
}
const sendData = () => {
  let id = database().ref('todos/').push().key
  database().ref(`todos/${id}`).set({
    userName:data.userName,
    email:data.email,
    password:data.password,
  });

}
  return (
    <View style={{ flex: 1, backgroundColor: "lightgray" }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.head}>Sign Up</Text>
          <View>
            <Text style={styles.text}>Name :</Text>
            <Input pcolor="gray" place=" Enter the Email " change={(e) => setdata({ ...data, userName: e })} />
          </View>
          <View>
            <Text style={[styles.text, { marginTop: 20 }]}>Email :</Text>
            <Input pcolor="gray" place=" Enter the Email " change={(e) => setdata({ ...data, email: e })} />
          </View>
          <View>
            <Text style={[styles.text, { marginTop: 20 }]}>Password :</Text>
            <Input pcolor="gray" place=" Enter the Password " change={(e) => setdata({ ...data, password: e })} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ marginTop: 25, fontSize: 20, color: "#003566", fontWeight:"bold" }}>You have already account?</Text>
          </TouchableOpacity>
          <Buttons styl={{ marginTop: 15, width: 200, }} press={signup} text="Sign Up" />
          {/* <Buttons styl={{ marginTop: 15, width: 200, }} press={sendData} text="Sign Up" /> */}
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "#f6fff8",
    flex: 1,
    alignItems: 'center',
    elevation: 15,
    borderRadius:20,
    borderColor:"#003566" ,
    borderWidth:2


  },
  head: {
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: "italic",
    marginTop: "12%",
    marginBottom: "8%",
    color: "black"
  },
  text: {
    fontSize: 30,
    color: "black",
    fontStyle: "italic",
    marginBottom: 5,
  }
})
