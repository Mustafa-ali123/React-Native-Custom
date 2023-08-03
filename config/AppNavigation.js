import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity } from 'react-native'
import Product from '../screen/Product';
import Home from '../screen/Home';
import Login from '../screen/Login';
import Signup from '../screen/Signup';
import Map from '../screen/Map';
import Profile from '../screen/Profile';
import Icon from "react-native-vector-icons/MaterialIcons"

export default function AppNavigation({navigation}) {
    const Stack = createNativeStackNavigator()
    const move = () => {
      navigation.navigate("Home")
    }
  return (    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product"component={Product} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator> 
    </NavigationContainer>
  )
}

// import React from 'react'
// import Home from '../screen/Home'
// import Login from '../screen/Login'
// import Product from '../screen/Product'
// import { View, Text } from 'react-native'
// import {Icon} from "react-native-vector-icons/MaterialIcons"
// import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// export default function AppNavigation() {
//   const Bottom = createBottomTabNavigator()
//   return (
//     <NavigationContainer>
//       <Bottom.Navigator>
//         <Bottom.Screen options={{headerShown:false}} name='home' component={Home} />
//         <Bottom.Screen options={{headerShown:false}} name='Product' component={Product} />
//         <Bottom.Screen options={{headerShown:false,tabBarIcon:()=>{
//           return <Icon name="home" size={30} color="black" />
//         }}} name='Login' component={Login} />
//       </Bottom.Navigator>
//     </NavigationContainer>    
//   )
// }


// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native'
// import { View, Text } from 'react-native'


// const Drawer = createDrawerNavigator();

// function Home() {
// return(
//   <View>
//     <Text style={{fontSize:40,justifyContent:'center',textAlign:'center'}}>Home</Text>
//   </View>
// )
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//     <Drawer.Navigator>
//       <Drawer.Screen name="home" component={Home} />      
//     </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }