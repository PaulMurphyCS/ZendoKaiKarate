import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'

import contentKey from '../../../content'
import { Wrapper, Title } from '../../components/'

const styles = StyleSheet.create({

})

const techniqueList = [
  { key: '1', textJap: contentKey.GREEN_TECHNIQUES_ONE_JAP },
  { key: '2', textJap: contentKey.GREEN_TECHNIQUES_TWO_JAP },
  { key: '3', textJap: contentKey.GREEN_TECHNIQUES_THREE_JAP },
  { key: '4', textJap: contentKey.GREEN_TECHNIQUES_FOUR_JAP },
  { key: '5', textJap: contentKey.GREEN_TECHNIQUES_FIVE_JAP }
]

const combinationList = [
  { key: '1', textJap: contentKey.GREEN_COMBINATION_ONE_JAP },
  { key: '2', textJap: contentKey.GREEN_COMBINATION_TWO_JAP },
  { key: '3', textJap: contentKey.GREEN_COMBINATION_THREE_JAP }
]

class GreenBelt extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: contentKey.GREEN_BELT
  })
  render() {
    return (
      <Wrapper>
        <Title>{contentKey.SYLLABUS_TITLE_YOGA}</Title>
        <Text>{contentKey.GREEN_YOGA}</Text>
        <Title>{contentKey.SYLLABUS_TITLE_BASIC_TECHNIQUES}</Title>
        <FlatList
          data={techniqueList}
          renderItem={
            ({item}) =>
            <Text>{item.key}. {item.textJap}</Text>
          }
        />
        <Title>{contentKey.SYLLABUS_TITLE_COMBINATION_TECHNIQUES}</Title>
        <FlatList
          data={combinationList}
          renderItem={
            ({item}) =>
            <Text>{item.key}. {item.textJap}</Text>
          }
        />
        <Title>{contentKey.SYLLABUS_TITLE_KATA}</Title>
        <Text>{contentKey.GREEN_KATA}</Text>
        <Title>{contentKey.SYLLABUS_TITLE_DRILL}</Title>
        <Text>{contentKey.GREEN_DRILL}</Text>
      </Wrapper>
    )
  }
}

export default GreenBelt
