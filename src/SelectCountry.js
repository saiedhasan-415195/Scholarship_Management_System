import { View, Text, ScrollView ,TouchableOpacity,Touchable} from 'react-native'
import React from 'react'

const SelectCountry = ({navigation}) => {
  return (
    <ScrollView>
    <View style={{backgroundColor:'white',paddingLeft:30,width:'100%',paddingTop:20}}>
      <View style={{backgroundColor:'#f3f3f3',padding:8,width:'90%',marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>Australia</Text>
      </View>
      <View style={{backgroundColor:'#f3f3f3',padding:8,width:'90%',marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>Belgium</Text>
      </View>
      <View style={{backgroundColor:'#f3f3f3',padding:8,width:'90%',marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>Canada</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Scholarship Program')}>
      <View style={{backgroundColor:'#f3f3f3',padding:8,width:'90%',marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>China</Text>
      </View>
      </TouchableOpacity>
      <View style={{backgroundColor:'#f3f3f3',padding:8,width:'90%',marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>Denmark</Text>
      </View>
      <View style={{backgroundColor:'#f3f3f3',padding:8,width:'90%',marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>France</Text>
      </View>
      <View style={{backgroundColor:'#f3f3f3',padding:8,width:'90%',marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>Germany</Text>
      </View>
      <View style={{backgroundColor:'#f3f3f3',padding:8,width:'90%',marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>Italy</Text>
      </View>
      <View style={{backgroundColor:'#f3f3f3',padding:8,width:'90%',marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>Spain</Text>
      </View>
      <View style={{backgroundColor:'#f3f3f3',padding:8,width:'90%',marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>Iran</Text>
      </View>
      <View style={{backgroundColor:'#f3f3f3',padding:8,width:'90%',marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>Japan</Text>
      </View>
      <View style={{backgroundColor:'#f3f3f3',padding:8,width:'90%',marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>India</Text>
      </View>
      <View style={{backgroundColor:'#f3f3f3',padding:8,width:'90%',marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>South Korea</Text>
      </View>
      <View style={{backgroundColor:'#f3f3f3',padding:8,width:'90%',marginBottom:10}}>
        <Text style={{fontSize:20,marginLeft:10}}>Turkey</Text>
      </View>
      
    
     
    </View>
    </ScrollView>
  )
}

export default SelectCountry