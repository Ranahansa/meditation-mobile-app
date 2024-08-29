import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: Colors.primary,
      tabBarStyle: {
                    backgroundColor: "white",
                    position: "absolute",
                    borderRadius: 45,
                    height: 60,
                    margin: 12,
                    marginBottom: 10,
                    elevation: 20,
                    shadowColor: "black",
                    borderTopWidth: 1,
                }
      }}>
        <Tabs.Screen
          name="nature-meditate"
          options={{
            tabBarLabel: 'Meditate',
            tabBarLabelStyle:{
              fontWeight : "bold"
            },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="flower-tulip" size={35} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="affirmations"
          options={{
            tabBarLabel: 'Affirmations',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="meditation" size={35} color={color} />
            ),
          }}
        />
    </Tabs>
  )
}

export default TabsLayout