import { View, Text } from 'react-native'
import React from 'react'
import SclProgram from '../src/SclProgram';
import SelectCountry from '../src/SelectCountry';
import SchInfo from '../src/SchInfo';
import Home from '../src/Home';
import Login from '../src/Login';
import Signup from '../src/Signup';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const SchNavigatio = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen options={{
  headerShown: false,
 
}} name='Home' component={Home}/>
        <Stack.Screen name="Scholarship Program" component={SclProgram}/>
        <Stack.Screen name='Select Country' component={SelectCountry}/>
        <Stack.Screen name='Scholarship Information' component={SchInfo}/>
        <Stack.Screen options={{
  headerShown: false,
 
}} name="Login" component={Login}/>
      <Stack.Screen options={{
  headerShown: false,
 
}} name='Signup' component={Signup}/>
    </Stack.Navigator>
  )
}

export default SchNavigatio

