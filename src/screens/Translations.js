import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button
} from 'react-native'

import contentKey from '../../content'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class TranslationsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
  title: contentKey.TRANSLATIONS
  })

  render() {
    return (
        <View style={styles.container}>
          <Text>TRANSLATIONS</Text>
        </View>
      )
    }
}

export default TranslationsScreen
