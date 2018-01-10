import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button
} from 'react-native'

import contentKey from '../../../content'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class RedBelt extends Component {
  static navigationOptions = ({ navigation }) => ({
  title: contentKey.RED_BELT
  })

  render() {
    return (
        <View style={styles.container}>
          <Text>RedBelt</Text>
        </View>
      )
    }
}

export default RedBelt
