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
      title: contentKey.PINAN_SHODAN,
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
              slideTitle={contentKey.PINAN_SHODAN_STEP_ONE}
              slideImage={require('../../images/pinan-shodan/step_1.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_TWO}
              slideImage={require('../../images/pinan-shodan/step_2.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_THREE}
              slideImage={require('../../images/pinan-shodan/step_3.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_FOUR}
              slideImage={require('../../images/pinan-shodan/step_4.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_FIVE}
              slideImage={require('../../images/pinan-shodan/step_5.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_SIX}
              slideImage={require('../../images/pinan-shodan/step_6.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_SEVEN}
              slideImage={require('../../images/pinan-shodan/step_7.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_EIGHT}
              slideImage={require('../../images/pinan-shodan/step_8.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_NINE}
              slideImage={require('../../images/pinan-shodan/step_9.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_TEN}
              slideImage={require('../../images/pinan-shodan/step_10.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_ELEVEN}
              slideImage={require('../../images/pinan-shodan/step_11.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_TWELVE}
              slideImage={require('../../images/pinan-shodan/step_12.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_THIRTEEN}
              slideImage={require('../../images/pinan-shodan/step_13.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_FOURTEEN}
              slideImage={require('../../images/pinan-shodan/step_14.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_FIFTEEN}
              slideImage={require('../../images/pinan-shodan/step_15.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_SIXTEEN}
              slideImage={require('../../images/pinan-shodan/step_16.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_SEVENTEEN}
              slideImage={require('../../images/pinan-shodan/step_17.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_EIGHTEEN}
              slideImage={require('../../images/pinan-shodan/step_18.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_NINETEEN}
              slideImage={require('../../images/pinan-shodan/step_19.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_TWENTY}
              slideImage={require('../../images/pinan-shodan/step_20.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_TWENTYONE}
              slideImage={require('../../images/pinan-shodan/step_21.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_TWENTYTWO}
              slideImage={require('../../images/pinan-shodan/step_22.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_TWENTYTHREE}
              slideImage={require('../../images/pinan-shodan/step_23.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_TWENTYFOUR}
              slideImage={require('../../images/pinan-shodan/step_24.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_TWENTYFIVE}
              slideImage={require('../../images/pinan-shodan/step_25.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_TWENTYSIX}
              slideImage={require('../../images/pinan-shodan/step_26.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_TWENTYSEVEN}
              slideImage={require('../../images/pinan-shodan/step_27.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_TWENTYEIGHT}
              slideImage={require('../../images/pinan-shodan/step_28.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_TWENTYNINE}
              slideImage={require('../../images/pinan-shodan/step_29.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_THIRTY}
              slideImage={require('../../images/pinan-shodan/step_30.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_THIRTYONE}
              slideImage={require('../../images/pinan-shodan/step_31.png')}
            />
            <SliderSlide
              slideTitle={contentKey.PINAN_SHODAN_STEP_THIRTYTWO}
              slideImage={require('../../images/pinan-shodan/step_32.png')}
            />
          </Swiper>
        </PageBreaker>
        <PageBreaker>
          <Title>Video of {contentKey.PINAN_SHODAN}</Title>
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
