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

const url = require('../../video/pinan-shodan.mp4')

const imageRatio = 300 / 192

const styles = StyleSheet.create({
  sliderHeight: {
    height: width - 100,
    marginVertical: 10
  }
})

class KataPinanShodan extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    const header = state.params && (state.params.fullscreen ? undefined : null)
    const tabBarVisible = state.params ? state.params.fullscreen : true
    return {
      title: contentKey.PINAN_NIDAN,
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
        <View></View>
        <Title>Kata</Title>
        <Text>Click through each step of the kata.</Text>
        <PageBreaker>
          <Swiper
            showsButtons
            loop={false}
            showsPagination={false}
            style={styles.sliderHeight}
          >
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_1.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_2.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_3.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_4.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_5.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_6.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_7.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_8.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_9.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_10.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_11.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_12.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_13.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_14.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_15.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_16.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_17.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_18.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_19.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_20.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_21.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_22.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_23.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_24.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_25.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_26.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_27.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_28.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_29.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_30.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_31.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_32.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_33.png')}
            />
            <SliderSlide
              slideImage={require('../../images/pinan-nidan/step_34.png')}
            />
          </Swiper>
        </PageBreaker>
        <PageBreaker>
          <Title>Video of {contentKey.PINAN_NIDAN}</Title>
          <Text>Watch the Kata performed the whole way through.</Text>
          <Video
            url={url}
            onFullScreen={status => this.onFullScreen(status)}
          />
        </PageBreaker>
      </VideoWrapper>
    )
  }
}

export default KataPinanShodan
