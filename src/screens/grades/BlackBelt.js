import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'

import contentKey from '../../../content'
import { Wrapper, Title, Row, Column } from '../../components/'

const styles = StyleSheet.create({

})

const combinationList = [
  { key: '1', textJap: contentKey.FIRST_DAN_BLACK_COMBINATION_ONE_JAP },
  { key: '2', textJap: contentKey.FIRST_DAN_BLACK_COMBINATION_TWO_JAP },
  { key: '3', textJap: contentKey.FIRST_DAN_BLACK_COMBINATION_THREE_JAP },
  { key: '4', textJap: contentKey.FIRST_DAN_BLACK_COMBINATION_FOUR_JAP },
  { key: '5', textJap: contentKey.FIRST_DAN_BLACK_COMBINATION_FIVE_JAP }
]

const kataList = [
  { key: '1', textJap: contentKey.FIRST_DAN_BLACK_KATA_ONE },
  { key: '2', textJap: contentKey.FIRST_DAN_BLACK_KATA_TWO },
  { key: '3', textJap: contentKey.FIRST_DAN_BLACK_KATA_THREE },
  { key: '4', textJap: contentKey.FIRST_DAN_BLACK_KATA_FOUR },
  { key: '5', textJap: contentKey.FIRST_DAN_BLACK_KATA_FIVE }
]

class BrownBeltThird extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: contentKey.FIRST_DAN_BLACK_BELT
  })
  render() {
    return (
      <Wrapper>
        <Title>{contentKey.SYLLABUS_TITLE_TEST}</Title>
        <Row>
          <Column numberOfColumns={1}>{contentKey.FIRST_DAN_BLACK_TEST}</Column>
        </Row>
        <Title>{contentKey.SYLLABUS_TITLE_YOGA}</Title>
        <Row>
          <Column numberOfColumns={1}>{contentKey.FIRST_DAN_BLACK_YOGA}</Column>
        </Row>
        <Title>{contentKey.SYLLABUS_TITLE_BASIC_TECHNIQUES}</Title>
        <Row>
          <Column numberOfColumns={1}>{contentKey.FIRST_DAN_BLACK_BASIC_TECHNIQUES}</Column>
        </Row>
        <Title>{contentKey.SYLLABUS_TITLE_COMBINATION_TECHNIQUES}</Title>
        <FlatList
          data={combinationList}
          renderItem={
            ({item}) =>
            <Row>
              <Column numberOfColumns={1}>{item.key}. {item.textJap}</Column>
            </Row>
          }
        />
        <Title>{contentKey.SYLLABUS_TITLE_KATA}</Title>
        <Row>
          <Column numberOfColumns={1}>{contentKey.FIRST_KYU_BROWN_KATA_INTRO}</Column>
        </Row>
        <FlatList
          data={kataList}
          renderItem={
            ({item}) =>
            <Row>
              <Column numberOfColumns={1}>{item.key}. {item.textJap}</Column>
            </Row>
          }
        />
        <Title>{contentKey.SYLLABUS_TITLE_DRILL}</Title>
        <Row>
          <Column numberOfColumns={1}>{contentKey.FIRST_KYU_BROWN_DRILL}</Column>
        </Row>
      </Wrapper>
    )
  }
}

export default BrownBeltThird
