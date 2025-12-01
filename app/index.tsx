import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

import ScreenOne from './MainScreenTabs/ScreenOne'
import ScreenThree from './MainScreenTabs/ScreenThree'
import ScreenTwo from './MainScreenTabs/ScreenTwo'

const Tab = createBottomTabNavigator()

export default function Index() {
  const { colors } = useThemeContext()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any = 'home'

          if (route.name === 'ScreenOne') {
            iconName = 'home'
          } else if (route.name === 'ScreenTwo') {
            iconName = 'wallet'
          } else if (route.name === 'ScreenThree') {
            iconName = 'cog'
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: '#ddd',
        },
      })}
    >
      <Tab.Screen
        name="ScreenOne"
        component={ScreenOne}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="ScreenTwo"
        component={ScreenTwo}
        options={{ title: 'Wallet' }}
      />
      <Tab.Screen
        name="ScreenThree"
        component={ScreenThree}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  )
}