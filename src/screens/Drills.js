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
import contentKey from '../../content'
const CommonStyles = require('../../styles/common')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const list = [
  { key: '1', title: contentKey.DRILL_ONE, link: 'DrillPinanShodan', bgColor: CommonStyles.styles.colorOrangeBelt },
  { key: '2', title: contentKey.GREEN_BELT, link: 'GreenBelt', bgColor: CommonStyles.styles.colorGreenBelt },
  { key: '3', title: contentKey.BLUE_BELT, link: 'BlueBelt', bgColor: CommonStyles.styles.colorBlueBelt },
  { key: '4', title: contentKey.PURPLE_BELT, link: 'PurpleBelt', bgColor: CommonStyles.styles.colorPurpleBelt },
  { key: '5', title: contentKey.THIRD_KYU_BROWN_BELT, link: 'BrownBeltThird', bgColor: CommonStyles.styles.colorBrownBelt },
  { key: '6', title: contentKey.SECOND_KYU_BROWN_BELT, link: 'BrownBeltSecond', bgColor: CommonStyles.styles.colorBrownBelt },
  { key: '7', title: contentKey.FIRST_KYU_BROWN_BELT, link: 'BrownBeltFirst', bgColor: CommonStyles.styles.colorBrownBelt },
  { key: '8', title: contentKey.FIRST_DAN_BLACK_BELT, link: 'BlackBelt', bgColor: CommonStyles.styles.colorBlackBelt }
]

class DrillScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
  title: contentKey.DRILLS_TITLE
  })

  render() {
    return (
        <View style={styles.container}>
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
        </View>
      )
    }
}

export default DrillScreen
