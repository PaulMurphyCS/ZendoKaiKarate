import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button
} from 'react-native'

import SubMenuItems from '../components/SubMenuItems'
import Wrapper from '../components/Wrapper'
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
    title: contentKey.RED_BELT,
    link: 'RedBelt',
    bgColor: CommonStyles.styles.colorRedBelt
  },
  {
    key: '2',
    title: contentKey.YELLOW_BELT,
    link: 'YellowBelt',
    bgColor: CommonStyles.styles.colorYellowBelt
  },
  {
    key: '3',
    title: contentKey.ORANGE_BELT,
    link: 'OrangeBelt',
    bgColor: CommonStyles.styles.colorOrangeBelt
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
  },
  {
    key: '11',
    title: 'Translations',
    link: 'RedBelt'
  },
  {
    key: '12',
    title: 'Stances',
    link: 'RedBelt'
  }
]

class GradeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
     headerRight: <Button  title="Info" />,
     title: contentKey.GRADES
  })

  render() {
    return (
        <Wrapper style={styles.container}>
          <FlatList
            data={list}
            renderItem={
              ({item}) =>
              <SubMenuItems
                title={item.title}
                link={item.link}
                navigation={this.props.navigation}
                bgColor={item.bgColor}
              />
            }
          />
        </Wrapper>
      )
    }
}

export default GradeScreen
