import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native'

const CommonStyles = require('../../../styles/common')
const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  slideWrapper: {
    marginBottom: 10,
    flex: 1,
    height: width - 100
  },
  slideText: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10
  },
  slideImageStyle: {
    width: width - 10,
    height: width - 100,
    flex: 1
  }
})

class SliderSlide extends Component {
  render() {
    return (
      <View style={styles.slideWrapper}>
        <Image style={styles.slideImageStyle} source={this.props.slideImage} />
        <Text style={styles.slideText}>
          {this.props.slideTitle}
        </Text>
      </View>
    )
  }
}

SliderSlide.defaultProps = {
  slideTitle: null
}
SliderSlide.propTypes = {
  slideTitle: PropTypes.string,
  slideImage: PropTypes.number.isRequired
}


export default SliderSlide
