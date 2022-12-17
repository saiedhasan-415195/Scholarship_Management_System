import { View, Text, TouchableOpacity,Button,Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Colors from '../components/Color'

const Home = ({navigation}) => {
  return (
    <View>
    <View>
      <Header/>
      <View style={{flexDirection:'column',alignItems:'center'}}>
      <Image
          style={{
            height: 200,
            width: '95%',
            marginTop:10,
            borderRadius:20
          }}
          source={require("../assets/scholar.jpg")}
        />
      </View>
      <View style={{marginTop:50,flexDirection:'column',alignItems:'center'}}>
     
      
        <View  style={{backgroundColor:'green',paddingLeft:80,paddingRight:80,paddingBottom:50,paddingTop:50,borderRadius:50}}>
          <Text style={{fontSize:16,color:"#f3f3f3"}}>National Scholarships</Text>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('Select Country')}>
        <View style={{backgroundColor:'green',marginTop:50,paddingLeft:60,paddingRight:60,paddingBottom:50,paddingTop:50,borderRadius:50}}>
          <Text style={{fontSize:16,color:"#f3f3f3"}}>International Scholarships</Text>
        </View>
        </TouchableOpacity>
      

          
    </View>

</View>


  </View>

  
  )}

export default Home;
