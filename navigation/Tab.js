import { View, Text } from 'react-native'
import React from 'react'
import Profile from '../src/Profile';
import SchNavigatio from './SchNavigatio';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const TabNav = createBottomTabNavigator();
const Tab = ({}) => {
  return (
    <TabNav.Navigator>
          <TabNav.Screen
        name="Home"
        component={SchNavigatio}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
        
      />

<TabNav.Screen
        name="Profile"
        component={Profile}
        options={{
          
          tabBarIcon: ({ color, size }) => (
            < Ionicons
              name="person-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
        
      />
        
    </TabNav.Navigator>
    
  )
}

export default Tab