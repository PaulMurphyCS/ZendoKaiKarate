import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import contentKey from '../../../content'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class YellowBelt extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: contentKey.ORANGE_BELT
  })
  render() {
    return (
      <View style={styles.container}>
        <Text>Orange Belt Page</Text>
      </View>
    )
  }
}

export default YellowBelt
