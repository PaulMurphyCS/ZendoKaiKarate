import React from 'react'
import {
  StatusBar,
  View
} from 'react-native'

import RootNavigator from './router'

const App = () => (
  <View style={{flex: 1}}>
    <StatusBar
      barStyle="light-content"
    />
    <RootNavigator />
  </View>
)

export default App
