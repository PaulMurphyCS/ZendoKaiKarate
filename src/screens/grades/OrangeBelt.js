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

const techniqueList = [
  { key: '1', textJap: contentKey.ORANGE_TECHNIQUES_ONE_JAP },
  { key: '2', textJap: contentKey.ORANGE_TECHNIQUES_TWO_JAP },
  { key: '3', textJap: contentKey.ORANGE_TECHNIQUES_THREE_JAP },
  { key: '4', textJap: contentKey.ORANGE_TECHNIQUES_FOUR_JAP }
]

const combinationList = [
  { key: '1', textJap: contentKey.ORANGE_COMBINATION_ONE_JAP },
  { key: '2', textJap: contentKey.ORANGE_COMBINATION_TWO_JAP },
  { key: '3', textJap: contentKey.ORANGE_COMBINATION_THREE_JAP }
]

const blockList = [
  { key: '1', textJap: contentKey.ORANGE_BLOCK_ONE_JAP },
  { key: '2', textJap: contentKey.ORANGE_BLOCK_TWO_JAP },
  { key: '3', textJap: contentKey.ORANGE_BLOCK_THREE_JAP },
  { key: '4', textJap: contentKey.ORANGE_BLOCK_FOUR_JAP },
  { key: '5', textJap: contentKey.ORANGE_BLOCK_FIVE_JAP }
]

class OrangeBelt extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: contentKey.ORANGE_BELT
  })
  render() {
    return (
      <Wrapper>
        <Title>{contentKey.SYLLABUS_TITLE_YOGA}</Title>
        <Row>
          <Column numberOfColumns={1}>{contentKey.ORANGE_YOGA}</Column>
        </Row>
        <Title>{contentKey.SYLLABUS_TITLE_BASIC_TECHNIQUES}</Title>
        <FlatList
          data={techniqueList}
          renderItem={
            ({item}) =>
            <Row>
              <Column numberOfColumns={1}>{item.key}. {item.textJap}</Column>
            </Row>
          }
        />
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
        <Title>{contentKey.SYLLABUS_TITLE_BLOCKS}</Title>
        <FlatList
          data={blockList}
          renderItem={
            ({item}) =>
            <Row>
              <Column numberOfColumns={1}>{item.key}. {item.textJap}</Column>
            </Row>
          }
        />
        <Title>{contentKey.SYLLABUS_TITLE_KATA}</Title>
        <Row>
          <Column numberOfColumns={1}>{contentKey.ORANGE_KATA}</Column>
        </Row>
        <Title>{contentKey.SYLLABUS_TITLE_DRILL}</Title>
        <Row>
          <Column numberOfColumns={1}>{contentKey.ORANGE_DRILL}</Column>
        </Row>
      </Wrapper>
    )
  }
}

export default OrangeBelt
