import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  
  const Profile = ({navigation}) => {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.flexdd}>
            <Image
              style={styles.imageStyle}
              source={require('../assets/saied.jpg')}
            />
            <View>
              <Text style={styles.title}>Saied Hasan</Text>
              <Text style={styles.caption}>@saied</Text>
            </View>
          </View>
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Ionicons name="location-sharp" color="#777777" size={25} />
              <Text style={{color: '#777777', marginLeft: 10, fontWeight: '400'}}>
                Daffodil Smart City
              </Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="call" color="#777777" size={25} />
              <Text style={{color: '#777777', marginLeft: 10, fontWeight: '400'}}>
                +8801533515992
              </Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="ios-mail-sharp" color="#777777" size={25} />
              <Text style={{color: '#777777', marginLeft: 10, fontWeight: '400'}}>
                saied15-3913@diu.bd.edu
              </Text>
            </View>
  
            
          </View>
          <View>
            <View style={styles.menuItem}>
              <Ionicons name="person-circle-outline" color="#777777" size={20} />
              <TouchableOpacity>
                <Text
                
                  style={{marginLeft: 10}}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
           
            <View style={styles.menuItem}>
              <Ionicons name="ios-construct-outline" color="#777777" size={20} />
              <TouchableOpacity>
                <Text

                  style={{marginLeft: 10}}>
                  Support
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuItem}>
              <Ionicons name="settings-sharp" color="#777777" size={20} />
              <TouchableOpacity>
                <Text
                 
                  style={{marginLeft: 10}}>
                  Setting
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuItem}>
              <Ionicons name="exit-outline" color="#777777" size={20} />
              <TouchableOpacity>
                <Text style={{marginLeft: 10}}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    flexdd: {
      flexDirection: 'row',
      marginTop: 10,
      marginLeft: 10,
    },
    imageStyle: {
      height: 70,
      width: 70,
      borderRadius: 50,
      marginLeft:20
    },
    container: {
      flex: 1,
      marginTop:20,
      marginLeft:20

    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
      marginTop: 50,
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 10,
      marginLeft: 10,
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
      marginLeft: 10,
      marginTop: 10,
    },
    row: {
      flexDirection: 'row',
      marginBottom: 15,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });
  
  export default Profile;
  