import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet
} from 'react-native'

import contentKey from '../../../content'
import { Wrapper, Title, Row, Column } from '../../components/'

const styles = StyleSheet.create({
 japanese: {
   fontStyle: 'italic'
 }

})

const techniqueList = [
  { key: '1', textJap: contentKey.YELLOW_TECHNIQUES_ONE_JAP, textEng: contentKey.YELLOW_TECHNIQUES_ONE_ENG },
  { key: '2', textJap: contentKey.YELLOW_TECHNIQUES_TWO_JAP, textEng: contentKey.YELLOW_TECHNIQUES_TWO_ENG },
  { key: '3', textJap: contentKey.YELLOW_TECHNIQUES_THREE_JAP, textEng: contentKey.YELLOW_TECHNIQUES_THREE_ENG },
  { key: '4', textJap: contentKey.YELLOW_TECHNIQUES_FOUR_JAP, textEng: contentKey.YELLOW_TECHNIQUES_FOUR_ENG }

]

const combinationList = [
  { key: '1', textJap: contentKey.YELLOW_COMBINATIONS_ONE_JAP, textEng: contentKey.YELLOW_COMBINATIONS_ONE_ENG },
  { key: '2', textJap: contentKey.YELLOW_COMBINATIONS_TWO_JAP, textEng: contentKey.YELLOW_COMBINATIONS_TWO_ENG }
]

const blockList = [
  { key: '1', textJap: contentKey.YELLOW_BLOCK_ONE_JAP, textEng: contentKey.YELLOW_BLOCK_ONE_ENG },
  { key: '2', textJap: contentKey.YELLOW_BLOCK_TWO_JAP, textEng: contentKey.YELLOW_BLOCK_TWO_ENG },
  { key: '3', textJap: contentKey.YELLOW_BLOCK_THREE_JAP, textEng: contentKey.YELLOW_BLOCK_THREE_ENG },
  { key: '4', textJap: contentKey.YELLOW_BLOCK_FOUR_JAP, textEng: contentKey.YELLOW_BLOCK_FOUR_ENG },
  { key: '5', textJap: contentKey.YELLOW_BLOCK_FIVE_JAP, textEng: contentKey.YELLOW_BLOCK_FIVE_ENG }
]

class YellowBelt extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: contentKey.YELLOW_BELT
  })
  render() {
    return (
      <Wrapper>
        <Title>{contentKey.SYLLABUS_TITLE_BASIC_TECHNIQUES}</Title>
        <FlatList
          data={techniqueList}
          renderItem={
            ({item}) =>
            <Row>
              <Column numberOfColumns={2} style={[styles.japanese, styles.column]}>{item.key}. {item.textJap}</Column>
              <Column numberOfColumns={2} style={styles.english, styles.column}>{item.textEng}</Column>
            </Row>
          }
        />
        <Title>{contentKey.SYLLABUS_TITLE_COMBINATION_TECHNIQUES}</Title>
        <FlatList
          data={combinationList}
          renderItem={
            ({item}) =>
            <Row>
              <Column numberOfColumns={2} style={styles.japanese}>{item.key}. {item.textJap}</Column>
              <Column numberOfColumns={2} style={styles.english}>{item.textEng}</Column>
            </Row>
          }
        />
        <Title>{contentKey.SYLLABUS_TITLE_BLOCKS}</Title>
        <FlatList
          data={blockList}
          renderItem={
            ({item}) =>
            <Row>
              <Column numberOfColumns={2} style={styles.japanese}>{item.key}. {item.textJap}</Column>
              <Column numberOfColumns={2} style={styles.english}>{item.textEng}</Column>
            </Row>
          }
        />
      </Wrapper>
    )
  }
}

export default YellowBelt
