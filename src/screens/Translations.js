import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button
} from 'react-native'

import contentKey from '../../content'
import { Wrapper, Title, Row, Column } from '../components/'

const styles = StyleSheet.create({

})

const miscellaneousTranslation = [
  { key: '1', textJap: contentKey.MISCELLANEOUS_ONE_JAP, textEng: contentKey.MISCELLANEOUS_ONE_ENG },
  { key: '2', textJap: contentKey.MISCELLANEOUS_TWO_JAP, textEng: contentKey.MISCELLANEOUS_TWO_ENG },
  { key: '3', textJap: contentKey.MISCELLANEOUS_THREE_JAP, textEng: contentKey.MISCELLANEOUS_THREE_ENG },
  { key: '4', textJap: contentKey.MISCELLANEOUS_FOUR_JAP, textEng: contentKey.MISCELLANEOUS_FOUR_ENG },
  { key: '5', textJap: contentKey.MISCELLANEOUS_FIVE_JAP, textEng: contentKey.MISCELLANEOUS_FIVE_ENG },
  { key: '6', textJap: contentKey.MISCELLANEOUS_SIX_JAP, textEng: contentKey.MISCELLANEOUS_SIX_ENG },
  { key: '7', textJap: contentKey.MISCELLANEOUS_SEVEN_JAP, textEng: contentKey.MISCELLANEOUS_SEVEN_ENG },
  { key: '8', textJap: contentKey.MISCELLANEOUS_EIGHT_JAP, textEng: contentKey.MISCELLANEOUS_EIGHT_ENG },
  { key: '9', textJap: contentKey.MISCELLANEOUS_NINE_JAP, textEng: contentKey.MISCELLANEOUS_NINE_ENG },
  { key: '10', textJap: contentKey.MISCELLANEOUS_TEN_JAP, textEng: contentKey.MISCELLANEOUS_TEN_ENG },
  { key: '11', textJap: contentKey.MISCELLANEOUS_ELEVEN_JAP, textEng: contentKey.MISCELLANEOUS_ELEVEN_ENG },
  { key: '12', textJap: contentKey.MISCELLANEOUS_TWELVE_JAP, textEng: contentKey.MISCELLANEOUS_TWELVE_ENG },
  { key: '13', textJap: contentKey.MISCELLANEOUS_THIRTEEN_JAP, textEng: contentKey.MISCELLANEOUS_THIRTEEN_ENG },
  { key: '14', textJap: contentKey.MISCELLANEOUS_FOURTEEN_JAP, textEng: contentKey.MISCELLANEOUS_FOURTEEN_ENG },
  { key: '15', textJap: contentKey.MISCELLANEOUS_FIFTEEN_JAP, textEng: contentKey.MISCELLANEOUS_FIFTEEN_ENG },
  { key: '16', textJap: contentKey.MISCELLANEOUS_SIXTEEN_JAP, textEng: contentKey.MISCELLANEOUS_SIXTEEN_ENG }
]

const bodyTranslation = [
  { key: '1', textJap: contentKey.BODY_ONE_JAP, textEng: contentKey.BODY_ONE_ENG },
  { key: '2', textJap: contentKey.BODY_TWO_JAP, textEng: contentKey.BODY_TWO_ENG },
  { key: '3', textJap: contentKey.BODY_THREE_JAP, textEng: contentKey.BODY_THREE_ENG },
  { key: '4', textJap: contentKey.BODY_FOUR_JAP, textEng: contentKey.BODY_FOUR_ENG }
]

const handTranslation = [
  { key: '1', textJap: contentKey.HAND_ONE_JAP, textEng: contentKey.HAND_ONE_ENG },
  { key: '2', textJap: contentKey.HAND_TWO_JAP, textEng: contentKey.HAND_TWO_ENG },
  { key: '3', textJap: contentKey.HAND_THREE_JAP, textEng: contentKey.HAND_THREE_ENG },
  { key: '4', textJap: contentKey.HAND_FOUR_JAP, textEng: contentKey.HAND_FOUR_ENG },
  { key: '5', textJap: contentKey.HAND_FIVE_JAP, textEng: contentKey.HAND_FIVE_ENG },
  { key: '6', textJap: contentKey.HAND_SIX_JAP, textEng: contentKey.HAND_SIX_ENG },
  { key: '7', textJap: contentKey.HAND_SEVEN_JAP, textEng: contentKey.HAND_SEVEN_ENG },
  { key: '8', textJap: contentKey.HAND_EIGHT_JAP, textEng: contentKey.HAND_EIGHT_ENG },
  { key: '9', textJap: contentKey.HAND_NINE_JAP, textEng: contentKey.HAND_NINE_ENG },
  { key: '10', textJap: contentKey.HAND_TEN_JAP, textEng: contentKey.HAND_TEN_ENG },
  { key: '11', textJap: contentKey.HAND_ELEVEN_JAP, textEng: contentKey.HAND_ELEVEN_ENG },
  { key: '12', textJap: contentKey.HAND_TWELVE_JAP, textEng: contentKey.HAND_TWELVE_ENG },
  { key: '13', textJap: contentKey.HAND_THIRTEEN_JAP, textEng: contentKey.HAND_THIRTEEN_ENG },
  { key: '14', textJap: contentKey.HAND_FOURTEEN_JAP, textEng: contentKey.HAND_FOURTEEN_ENG },
  { key: '15', textJap: contentKey.HAND_FIFTEEN_JAP, textEng: contentKey.HAND_FIFTEEN_ENG },
  { key: '16', textJap: contentKey.HAND_SIXTEEN_JAP, textEng: contentKey.HAND_SIXTEEN_ENG },
  { key: '17', textJap: contentKey.HAND_SEVENTEEN_JAP, textEng: contentKey.HAND_SEVENTEEN_ENG }
]

class TranslationsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: contentKey.TRANSLATIONS
  })

  render() {
    return (
      <Wrapper>
        <Title>{contentKey.MISCELLANEOUS_TITLE}</Title>
        <FlatList
          data={miscellaneousTranslation}
          renderItem={
            ({item}) =>
            <Row>
              <Column numberOfColumns={2} class={styles.japanese}>{item.key}. {item.textJap}</Column>
              <Column numberOfColumns={2} class={styles.english}>{item.textEng}</Column>
            </Row>
          }
        />
        <Title>{contentKey.BODY_TITLE}</Title>
        <FlatList
          data={bodyTranslation}
          renderItem={
            ({item}) =>
            <Row>
              <Column numberOfColumns={2} class={styles.japanese}>{item.key}. {item.textJap}</Column>
              <Column numberOfColumns={2} class={styles.english}>{item.textEng}</Column>
            </Row>
          }
        />
        <Title>{contentKey.HAND_TITLE_JAP} | {contentKey.HAND_TITLE_ENG}</Title>
        <FlatList
          data={handTranslation}
          renderItem={
            ({item}) =>
            <Row>
              <Column numberOfColumns={2} class={styles.japanese}>{item.key}. {item.textJap}</Column>
              <Column numberOfColumns={2} class={styles.english}>{item.textEng}</Column>
            </Row>
          }
        />
      </Wrapper>
      )
    }
}

export default TranslationsScreen
