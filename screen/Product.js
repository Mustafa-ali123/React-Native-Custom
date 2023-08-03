import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from "react-native-vector-icons/MaterialIcons"
import LinearGradient from 'react-native-linear-gradient'
import Buttons from '../Componet/Buttons'
import axios from 'axios'

export default function Product({navigation}) {
  let [data, setdata] = useState([])
  let [spin, setspin] = useState(true)

  const getdata = () => {
    axios.get("https://real-pear-binturong-wrap.cyclic.app/api/card")
      .then((res) => {
        setdata(res.data.data)
        setspin(false)
        // console.log(res.data.data)
      }).catch((e) => console.log(e))
  }

  useEffect(() => {
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Icon name='person' size={30} color="black" />
            </TouchableOpacity>
        ),
    });
    const unsubscribe = navigation.addListener('focus', () => {
        // Screen was focused
        getdata()
        // Do something
    });

    return unsubscribe;
}, [navigation])

  // useEffect(() => {
    
  //   getdata()
  // }, [])
  // <Image style={{ width: 100, height: 100 }} source={{uri:"https://i.gifer.com/ZZ5H.gif"}}/>
  return (
    <ScrollView>
      <View style={styles.container}>
        {
          spin ? <Text style={{justifyContent:"center",textAlign:'center'}}>Load</Text> : data.map((x, i) => <View style={styles.coner} key={i}>
            <LinearGradient style={styles.grid} colors={["#495057", "#0a0908"]}>
              <Image style={styles.img} source={{ uri: x.image }} />
              <Text style={styles.header}>{x.text}</Text>
              <Text style={styles.body}>{x.body}this good...</Text>
              <Buttons styl={{color:"black",backgroundColor:"white"}} text="Show Details" />
            </LinearGradient>
          </View>)
        }
      </View>
    </ScrollView>
  )
}
let styles = StyleSheet.create({
  header: {
    marginVertical: 15,
    fontSize: 35,
    color: "white"
  },
  grid: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    borderRadius: 20
  },
  body: {
    fontSize: 25,
    fontStyle: "italic",
    width:325,
    textAlign:"center",
    color:"white"
  },
  img: {
    margin: 20,
    width: 310,
    height: 210,
    borderRadius: 10,
  },
  coner: {
    borderRadius: 20,
    borderColor: "black",
    alignItems: "center",
    flex: 1,
    width: "90%",
    height: 550,
    marginVertical: 15,
    backgroundColor: "#f6fff8",
    elevation: 30

  },
  container: {
    backgroundColor: "lightgray",
    // backgroundColor: "#222",
    alignItems: "center",
  },
})

