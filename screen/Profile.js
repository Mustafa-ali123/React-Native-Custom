import React from 'react'
import Home from './Home'
import Login from './Login'
import Camera from './Camera'
import Product from './Product'
import { View, Text } from 'react-native'
import PresonProfile from './PresonProfile'
import Icon from "react-native-vector-icons/MaterialIcons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


export default function Profile() {

  const Bottom = createBottomTabNavigator()

  return (    
       <Bottom.Navigator>
        
        <Bottom.Screen options={{headerShown:false,tabBarIcon:(tabI)=>{
          return <Icon name="photo-camera" size={30} style={{ color:tabI.focused?"green":"#222"}} />          
        }}} name='Camera' component={Camera} />

        <Bottom.Screen options={{headerShown:false,tabBarIcon:(tabI)=>{
          return <Icon name="account-circle" size={30} style={{color:tabI.focused?"green":"#222"}} />          
        }}} name='Person Profile' component={PresonProfile} />       

      </Bottom.Navigator>
  )
}