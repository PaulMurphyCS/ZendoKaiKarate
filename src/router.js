import React, { Component } from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  Button
} from 'react-native'

import HomeScreen from './screens/HomeScreen'
import Grades from './screens/Grades'
import Kata from './screens/Kata'
import Drills from './screens/Drills'
import Stances from './screens/Stances'
import Translations from './screens/Translations'

import RedBelt from './screens/grades/RedBelt'
import YellowBelt from './screens/grades/YellowBelt'
import OrangeBelt from './screens/grades/OrangeBelt'
import contentKey from '../content'
import hamburger from './images/hamburger_.png'
import logo from './images/logo.png'

const DrawerStack = DrawerNavigator({
  Home: { screen: HomeScreen },
  Grades: { screen: Grades },
  Kata: { screen: Kata },
  Drills: { screen: Drills },
  Stances: { screen: Stances },
  Translations: { screen: Translations  }
})

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'none',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'grey'},
    headerLeft: <TouchableOpacity
      onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }}}>
      <Image source={hamburger} />
    </TouchableOpacity>
  })
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Home: { screen: HomeScreen },
  RedBelt: { screen: RedBelt },
  YellowBelt: { screen: YellowBelt },
  OrangeBelt: { screen: OrangeBelt },
  drawerStack: { screen: DrawerNavigation }
}, {
  headerMode: 'float',
  initialRouteName: 'drawerStack'
})

export default PrimaryNav
