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
import { Wrapper, Title, Row, Column } from '../../components/'
import Swiper from 'react-native-swiper'

const stepOne = require('../../images/pinan-shodan/pinan_shodan_Layer-1.png')
const stepTwo = require('../../images/pinan-shodan/pinan_shodan_Layer-2.png')
const stepThree = require('../../images/pinan-shodan/pinan_shodan_Layer-3.png')
const stepFour = require('../../images/pinan-shodan/pinan_shodan_Layer-4.png')
const stepFive = require('../../images/pinan-shodan/pinan_shodan_Layer-5.png')

// image width and height; eg: 298 x 136px
const imageRatio = 300 / 192

const styles = StyleSheet.create({
  sliderHeight: {
    height: width - 100
  },
  sliderImage: {
    width: width - 10,
    height: width - 100
  }
})

class KataPinanShodan extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: contentKey.PINAN_SHODAN
  })
  render() {
    return (
      <Wrapper>
        <Title>Kata</Title>
        <Text>Click through each step of the kata.</Text>
        <View>
          <Swiper
            showsButtons
            loop={false}
            showsPagination={false}
            style={styles.sliderHeight}
          >
            <Image style={styles.sliderImage} source={stepOne} />
            <Image style={styles.sliderImage} source={stepTwo} />
            <Image style={styles.sliderImage} source={stepThree} />
            <Image style={styles.sliderImage} source={stepFour} />
            <Image style={styles.sliderImage} source={stepFive} />
        </Swiper>
        </View>
        <Text>Watch the Kata performed the whole way through.</Text>
        <Text>Video goes here.</Text>
      </Wrapper>
    )
  }
}

export default KataPinanShodan
