import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button
} from 'react-native'

import { SubMenuItems } from '../components'
import contentKey from '../../content'
const CommonStyles = require('../../styles/common')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CommonStyles.styles.colorMainBg
  }
})

const list = [
  {
    key: '1',
    title: contentKey.PINAN_SHODAN,
    link: 'RedBelt'
  },
  {
    key: '2',
    title: contentKey.PINAN_NIDAN,
    link: 'RedBelt'
  },
  {
    key: '3',
    title: contentKey.PINAN_SANDAN,
    link: 'RedBelt'
  },
  {
    key: '4',
    title: contentKey.PINAN_YODAN,
    link: 'RedBelt'
  },
  {
    key: '5',
    title: contentKey.PINAN_GODAN,
    link: 'RedBelt'
  },
  {
    key: '6',
    title: contentKey.KU_SHANKU,
    link: 'RedBelt'
  },
  {
    key: '7',
    title: contentKey.SEISHAN,
    link: 'RedBelt'
  },
  {
    key: '8',
    title: contentKey.ZASSAI_DAI,
    link: 'RedBelt'
  },
  {
    key: '9',
    title: contentKey.SHINTO,
    link: 'RedBelt'
  },
  {
    key: '10',
    title: contentKey.SIENCHIN,
    link: 'RedBelt'
  },
  {
    key: '11',
    title: contentKey.ZIAHANCHI,
    link: 'RedBelt'
  },
  {
    key: '12',
    title: contentKey.SOCHIN,
    link: 'RedBelt'
  },
  {
    key: '13',
    title: contentKey.ENPI,
    link: 'RedBelt'
  },
  {
    key: '14',
    title: contentKey.NIJUSHIHO,
    link: 'RedBelt'
  },
  {
    key: '15',
    title: contentKey.GOJUSHIHO,
    link: 'RedBelt'
  },
  {
    key: '16',
    title: contentKey.SEIPEI,
    link: 'RedBelt'
  },
  {
    key: '17',
    title: contentKey.UNSU,
    link: 'RedBelt'
  }
]

class KataScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: contentKey.KATA
  })

  render() {
    return (
        <View style={styles.container}>
          <FlatList
            data={list}
            renderItem={
              ({item}) =>
              <SubMenuItems
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

export default KataScreen
