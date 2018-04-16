import React from 'react'
import {
  StatusBar,
  View,
  StyleSheet
} from 'react-native'

import RootNavigator from './router'
const styles = StyleSheet.create({
  statusBar: {
    flex: 1
  }
})
const App = () => (
  <View style={styles.statusBar}>
    <StatusBar
      barStyle="light-content"
    />
    <RootNavigator />
  </View>
)

export default App
