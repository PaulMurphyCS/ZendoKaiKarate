import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native'

const width = Dimensions.get('window').width

import contentKey from '../../../content'
import { Title, Row, Column, VideoWrapper, SliderSlide, PageBreaker } from '../../components/'

import Swiper from 'react-native-swiper'
import Video from 'react-native-af-video-player'

const url = require('../../video/pinan-shodan-drill.mp4')

const imageRatio = 300 / 192

const styles = StyleSheet.create({

})

class DrillPinanShodan extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    const header = state.params && (state.params.fullscreen ? undefined : null)
    const tabBarVisible = state.params ? state.params.fullscreen : true
    return {
      title: contentKey.DRILL_ONE,
      header,
      tabBarVisible
    }

  }

  onFullScreen(status) {
    this.props.navigation.setParams({
      fullscreen: !status
    })
  }
  render() {
    return (
      <VideoWrapper>
        <Title>Drill</Title>
        <PageBreaker>
          <Title>Video of {contentKey.PINAN_NIDAN}</Title>
          <Text>Watch the Drill performed the whole way through.</Text>
          <Video
            url={url}
            onFullScreen={status => this.onFullScreen(status)}
          />
        </PageBreaker>
      </VideoWrapper>
    )
  }
}

export default DrillPinanShodan
