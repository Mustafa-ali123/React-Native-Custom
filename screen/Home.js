import { View, Text, Button, StyleSheet } from 'react-native'
// import { TouchableOpacity } from 'react-native'
// import { ScrollView } from 'react-native'
// import Icon from "react-native-vector-icons/MaterialIcons"

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', FontSize: 20 }}>
      <Text style={{ fontSize: 30 }}>Home</Text>
      <Button onPress={() => navigation.navigate("Product")} title='move to Product' />
      <Button onPress={() => navigation.navigate("Signup")} title='move to SignUp' />
      <Button onPress={() => navigation.navigate("Login")} title='move to login' />
      <Button onPress={() => navigation.navigate("Map")} title='move to login' />
      <Button onPress={() => navigation.navigate("Profile")} title='move to login' />
    </View>
  )
}

//  let styles= StyleSheet.create({

//   })
export default Home