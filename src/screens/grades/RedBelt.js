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
import { Wrapper, Title, Row, Column } from '../../components/'
const styles = StyleSheet.create({
})


const stanceList = [
  { key: '1', text: contentKey.RED_STANCE_ONE },
  { key: '2', text: contentKey.RED_STANCE_TWO },
  { key: '3', text: contentKey.RED_STANCE_THREE },
  { key: '4', text: contentKey.RED_STANCE_FOUR },
  { key: '5', text: contentKey.RED_STANCE_FIVE },
  { key: '6', text: contentKey.RED_STANCE_SIX }
]

const blockList = [
  { key: '1', text: contentKey.RED_BLOCK_ONE },
  { key: '2', text: contentKey.RED_BLOCK_TWO },
  { key: '3', text: contentKey.RED_BLOCK_THREE },
  { key: '4', text: contentKey.RED_BLOCK_FOUR }
]

const techniqueList = [
  { key: '1', text: contentKey.RED_TECHNIQUES_ONE },
  { key: '2', text: contentKey.RED_TECHNIQUES_TWO },
  { key: '3', text: contentKey.RED_TECHNIQUES_THREE }
]
class RedBelt extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: contentKey.RED_BELT
  })

  render() {
    return (
        <Wrapper>
          <Title>{contentKey.SYLLABUS_TITLE_STANCES}</Title>
          <FlatList
            data={stanceList}
            renderItem={
              ({item}) =>
              <Row>
                <Column numberOfColumns={1}>{item.key}. {item.text}</Column>
              </Row>
            }
          />
          <Title>{contentKey.SYLLABUS_TITLE_BLOCKS}</Title>
          <FlatList
            data={blockList}
            renderItem={
              ({item}) =>
              <Row>
                <Column numberOfColumns={1}>{item.key}. {item.text}</Column>
              </Row>
            }
          />
          <Text>{contentKey.RED_BLOCKS_NOTICE}</Text>
          <Title>{contentKey.SYLLABUS_TITLE_BASIC_TECHNIQUES}</Title>
          <FlatList
            data={techniqueList}
            renderItem={
              ({item}) =>
              <Row>
                <Column numberOfColumns={1}>{item.key}. {item.text}</Column>
              </Row>
            }
          />
          <Title>{contentKey.SYLLABUS_TITLE_NUMBERS}</Title>
          <Text>{contentKey.RED_NUMBERS_SUBHEADING}</Text>
          <Row>
            <Column numberOfColumns={1}>{contentKey.RED_NUMBERS}</Column>
          </Row>
        </Wrapper>
      )
    }
}

export default RedBelt
