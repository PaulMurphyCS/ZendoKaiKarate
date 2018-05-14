import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet
} from 'react-native'

const CommonStyles = require('../../../styles/common')

class PageBreaker extends Component {
  render() {
    const styles = StyleSheet.create({
      PageBreakerWrapper: {
        marginVertical: this.props.marginVertical
      }
    })
    return (
      <View style={styles.PageBreakerWrapper}>
        {this.props.children}
      </View>
    )
  }
}

PageBreaker.defaultProps = {
  marginVertical: 15
}
PageBreaker.propTypes = {
  children: PropTypes.node,
  marginVertical: PropTypes.number
}


export default PageBreaker
