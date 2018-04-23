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
import GreenBelt from './screens/grades/GreenBelt'
import BlueBelt from './screens/grades/BlueBelt'
import PurpleBelt from './screens/grades/PurpleBelt'
import BrownBeltThird from './screens/grades/BrownBeltThird'
import BrownBeltSecond from './screens/grades/BrownBeltSecond'
import BrownBeltFirst from './screens/grades/BrownBeltFirst'
import BlackBelt from './screens/grades/BlackBelt'
import contentKey from '../content'
import hamburger from './images/hamburger_.png'
import logo from './images/logo.png'
const CommonStyles = require('../styles/common')

const hamburgerStyle = {
  marginLeft: 10
}
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
    headerTitle: (
      <Image
        source={hamburger}
        style={hamburgerStyle}
      />
    ),
    headerStyle: {backgroundColor: CommonStyles.styles.colorStatusBar},
    headerLeft: <TouchableOpacity
      onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }}}>
    </TouchableOpacity>
  })
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Home: { screen: HomeScreen },
  Grades: { screen: Grades },
  Kata: { screen: Kata },
  Drills: { screen: Drills },
  Stances: { screen: Stances },
  Translations: { screen: Translations  },
  RedBelt: { screen: RedBelt },
  YellowBelt: { screen: YellowBelt },
  OrangeBelt: { screen: OrangeBelt },
  GreenBelt: { screen: GreenBelt },
  BlueBelt: { screen: BlueBelt },
  PurpleBelt: { screen: PurpleBelt },
  BrownBeltThird: { screen: BrownBeltThird },
  BrownBeltSecond: { screen: BrownBeltSecond },
  BrownBeltFirst: { screen: BrownBeltFirst},
  BlackBelt: { screen: BlackBelt}
  // drawerStack: { screen: DrawerNavigation }
}, {
  headerMode: 'float',
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: CommonStyles.styles.colorStatusBar
    },
    headerTintColor: '#FFFFFF',
    headerBackTitle: 'Back'
  }
})

export default PrimaryNav
