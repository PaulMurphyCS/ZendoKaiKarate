import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button
} from 'react-native'
import logo from '../images/logo.png'
import { HomeMenuItems } from '../components'
import contentKey from '../../content'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  imagelogo: {
    width: 40,
    height: 40
  }
})

const list = [
  {
    key: '1',
    title: contentKey.GRADES,
    link: 'Grades'
  },
  {
    key: '2',
    title: contentKey.KATA,
    link: 'Kata'
  },
  {
    key: '3',
    title: contentKey.DRILLS,
    link: 'Drills'
  },
  {
    key: '4',
    title: contentKey.TRANSLATIONS,
    link: 'Translations'
  },
  {
    key: '5',
    title: contentKey.STANCES,
    link: 'grades/RedBelt'
  }
]

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: <Image source={logo} style={styles.imagelogo} />
  })
  render() {
    return (
        <View style={styles.container}>
          <FlatList
            data={list}
            numColumns={2}
            renderItem={
              ({item}) =>
              <HomeMenuItems
                title={item.title}
                link={item.link}
                navigation={this.props.navigation}
              />
            }
          />
        </View>
      )
    }
}

export default HomeScreen
