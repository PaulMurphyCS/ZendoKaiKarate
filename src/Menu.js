import React, { Component } from 'react'
import RootNavigator from './router'
const {
  Dimensions,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text
} = require('react-native')

const window = Dimensions.get('window')

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: 250,
    paddingTop: window.height / 9
  }
})

class Menu extends Component {
  render() {
    console.log('red', this.props.navigation)
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <Text>Hi Paul</Text>
        <Button
          onPress={() => navigation.navigate("RedBelt")}
          title={'paul'}
        >
        <Text>Paul</Text>
        </Button>
      </ScrollView>
    )
  }
}

export default Menu
