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

const list = [
  {
    key: '1',
    title: 'Orange Belt',
    link: 'RedBelt'
  },
  {
    key: '2',
    title: 'Orange Belt',
    link: 'RedBelt'
  },
  {
    key: '3',
    title: 'Orange Belt',
    link: 'RedBelt'
  },
  {
    key: '4',
    title: 'Green Belt',
    link: 'RedBelt'
  },
  {
    key: '5',
    title: 'Blue Belt',
    link: 'RedBelt'
  },
  {
    key: '6',
    title: 'Purple Belt',
    link: 'RedBelt'
  },
  {
    key: '7',
    title: 'Brown Belt 3rd ku',
    link: 'RedBelt'
  },
  {
    key: '8',
    title: 'Brown Belt 2nd ku',
    link: 'RedBelt'
  },
  {
    key: '9',
    title: 'Brown Belt 1st ku',
    link: 'RedBelt'
  },
  {
    key: '10',
    title: 'Black Belt',
    link: 'RedBelt'
  }
  ,
  {
    key: '11',
    title: 'Translations',
    link: 'RedBelt'
  }
  ,
  {
    key: '12',
    title: 'Stances',
    link: 'RedBelt'
  }
]

class DrillScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
  title: contentKey.DRILLS_TITLE
  })

  render() {
    return (
        <View style={styles.container}>
          <FlatList
            data={list}
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

export default DrillScreen
