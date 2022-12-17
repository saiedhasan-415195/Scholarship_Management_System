import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const SclProgram = ({navigation}) => {
  return (
    <View style={{backgroundColor:"white",paddingTop:20}}>
      <TouchableOpacity  onPress={() => navigation.navigate('Scholarship Information')} >
      <View style={{backgroundColor:'#f3f3f3',padding:8,marginLeft:10,marginBottom:10,marginRight:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>Schwarzman Scholars Program at Beijing University</Text>
      </View>
      </TouchableOpacity>
      <View style={{backgroundColor:'#f3f3f3',padding:8,marginBottom:10,marginLeft:10,marginRight:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>Computer Science & Engineering Scholars Program at Beijing University</Text>
      </View>
      <View style={{backgroundColor:'#f3f3f3',padding:8,marginLeft:10,marginRight:10,marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>Electronical & Electronics Engineering Scholars Program at Beijing University</Text>
      </View>
      <View style={{backgroundColor:'#f3f3f3',padding:8,marginLeft:10,marginRight:10,marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>BBA Scholars Program at Beijing University</Text>
      </View>
      </View>
  )
}

export default SclProgram