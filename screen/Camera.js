import React, { useState } from 'react'
import  Buttons from '../Componet/Buttons'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from "react-native-vector-icons/MaterialIcons"
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Camera({ navigation }) {

  let [img, setimg] = useState("https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png")
  // let [spin, setspin] = useState(true)

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo'
    })
    setimg(`${result.assets[0].uri}`)
  }
  const openGallery = async() => {
    const result = await launchImageLibrary({
      mediaType:'photo'
    });    
    setimg(`${result.assets[0].uri}`)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
      <Text style={{ fontSize: 30, marginBottom: 20 }} >Profile Image</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>

        <TouchableOpacity onPress={openCamera} style={styles.icon}>
          <Icon name="camera" size={50} color="#003566" />
        </TouchableOpacity>

        <TouchableOpacity onPress={openGallery} style={styles.icon}>
          <Icon name="image" size={50} color="#003566" />
        </TouchableOpacity>
      </View>
      <Image style={styles.image} source={{ uri: img }} />

     <Buttons styl={styles.but} text="Save Profile" />

    </View>
  )
}


let styles = StyleSheet.create({
  icon: {
    borderColor: "lightgray",
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: "white",
    elevation: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop:30,
    borderRadius:98,
    borderColor:"darkgray",
    borderWidth:5,
  },
  but:{
    backgroundColor:"white",
    color:"#003566",
    // borderRadius:4,
    borderColor:"#003566",
    borderWidth:1,  
    elevation:15, 
    marginVertical:10
  }
})