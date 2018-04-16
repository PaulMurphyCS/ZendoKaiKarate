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

const gradeList = [
  { key: '1', title: contentKey.RED_BELT, link: 'RedBelt', bgColor: CommonStyles.styles.colorRedBelt },
  { key: '2', title: contentKey.YELLOW_BELT, link: 'YellowBelt', bgColor: CommonStyles.styles.colorYellowBelt },
  { key: '3', title: contentKey.ORANGE_BELT, link: 'OrangeBelt', bgColor: CommonStyles.styles.colorOrangeBelt },
  { key: '4', title: contentKey.GREEN_BELT, link: 'GreenBelt', bgColor: CommonStyles.styles.colorGreenBelt },
  { key: '5', title: contentKey.BLUE_BELT, link: 'BlueBelt', bgColor: CommonStyles.styles.colorBlueBelt },
  { key: '6', title: contentKey.PURPLE_BELT, link: 'PurpleBelt', bgColor: CommonStyles.styles.colorPurpleBelt },
  { key: '7', title: contentKey.THIRD_KYU_BROWN_BELT, link: 'BrownBeltThird', bgColor: CommonStyles.styles.colorBrownBelt },
  { key: '8', title: contentKey.SECOND_KYU_BROWN_BELT, link: 'BrownBeltSecond', bgColor: CommonStyles.styles.colorBrownBelt },
  { key: '9', title: contentKey.FIRST_KYU_BROWN_BELT, link: 'BrownBeltFirst', bgColor: CommonStyles.styles.colorBrownBelt },
  { key: '10', title: contentKey.FIRST_DAN_BLACK_BELT, link: 'BlackBelt', bgColor: CommonStyles.styles.colorBlackBelt }
]

class GradeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
     title: contentKey.GRADES
  })

  render() {
    return (
        <View style={styles.container}>
          <FlatList
            data={gradeList}
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
        </View>
      )
    }
}

export default GradeScreen
