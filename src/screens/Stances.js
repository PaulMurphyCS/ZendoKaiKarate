import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button
} from 'react-native'

import HomeMenuItems from '../components/HomeMenuItems'
import contentKey from '../../content'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class StancesScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
  title: contentKey.STANCES
  })

  render() {
    return (
        <View style={styles.container}>
          <Text>STANCES</Text>
        </View>
      )
    }
}

export default StancesScreen
