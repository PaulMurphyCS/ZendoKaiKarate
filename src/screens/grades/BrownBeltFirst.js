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
  { key: '1', textJap: contentKey.FIRST_KYU_BROWN_TECHNIQUES_ONE_JAP },
  { key: '2', textJap: contentKey.FIRST_KYU_BROWN_TECHNIQUES_TWO_JAP },
  { key: '3', textJap: contentKey.FIRST_KYU_BROWN_TECHNIQUES_THREE_JAP },
  { key: '4', textJap: contentKey.FIRST_KYU_BROWN_TECHNIQUES_FOUR_JAP },
  { key: '5', textJap: contentKey.FIRST_KYU_BROWN_TECHNIQUES_FIVE_JAP },
  { key: '6', textJap: contentKey.FIRST_KYU_BROWN_TECHNIQUES_SIX_JAP }
]

const combinationList = [
  { key: '1', textJap: contentKey.FIRST_KYU_BROWN_COMBINATION_ONE_JAP },
  { key: '2', textJap: contentKey.FIRST_KYU_BROWN_COMBINATION_TWO_JAP },
  { key: '3', textJap: contentKey.FIRST_KYU_BROWN_COMBINATION_THREE_JAP }
]

const kataList = [
  { key: '1', textJap: contentKey.FIRST_KYU_BROWN_KATA_ONE },
  { key: '2', textJap: contentKey.FIRST_KYU_BROWN_KATA_TWO },
  { key: '3', textJap: contentKey.FIRST_KYU_BROWN_KATA_THREE },
  { key: '4', textJap: contentKey.FIRST_KYU_BROWN_KATA_FOUR },
  { key: '5', textJap: contentKey.FIRST_KYU_BROWN_KATA_FIVE }
]

class BrownBeltThird extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: contentKey.FIRST_KYU_BROWN_BELT
  })
  render() {
    return (
      <Wrapper>
        <Title>{contentKey.SYLLABUS_TITLE_YOGA}</Title>
        <Text>{contentKey.FIRST_KYU_BROWN_YOGA}</Text>
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
        <Text>{contentKey.FIRST_KYU_BROWN_KATA_INTRO}</Text>
        <FlatList
          data={kataList}
          renderItem={
            ({item}) =>
            <Text>{item.key}. {item.textJap}</Text>
          }
        />
        <Title>{contentKey.SYLLABUS_TITLE_DRILL}</Title>
        <Text>{contentKey.FIRST_KYU_BROWN_DRILL}</Text>
      </Wrapper>
    )
  }
}

export default BrownBeltThird
