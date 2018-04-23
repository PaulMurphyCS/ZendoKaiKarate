import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native'

const CommonStyles = require('../../../styles/common')

const styles = StyleSheet.create({
  row: {
    flexDirection:'row',
    flex: 1,
    marginVertical: 5
  }
})

class Row extends Component {
  render() {
    return (
      <View style={styles.row}>
          {this.props.children}
      </View>
    )
  }
}

Row.propTypes = {
  children: PropTypes.node
}


export default Row
