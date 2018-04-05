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
import { Wrapper } from '../../components' 
const styles = StyleSheet.create({
})

class RedBelt extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: contentKey.RED_BELT
  })

  render() {
    return (
        <Wrapper>
          <Text>{contentKey.RED_BELT}</Text>
          <Text>{contentKey.SYLLABUS_TITLE_STANCES}</Text>
          <Text>{contentKey.SYLLABUS_TITLE_BLOCKS}</Text>
          <Text>{contentKey.SYLLABUS_TITLE_BASIC_TECHNIQUES}</Text>
          <Text>{contentKey.SYLLABUS_TITLE_NUMBERS}</Text>
          <Text>{contentKey.SYLLABUS_TITLE_COMBINATION_TECHNIQUES}</Text>
          <Text>{contentKey.SYLLABUS_TITLE_YOGA}</Text>
          <Text>{contentKey.SYLLABUS_TITLE_KATA}</Text>
          <Text>{contentKey.SYLLABUS_TITLE_DRILL}</Text>
          <Text>{contentKey.SYLLABUS_TITLE_TEST}</Text>
        </Wrapper>
      )
    }
}

export default RedBelt
