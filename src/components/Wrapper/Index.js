import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native'

const CommonStyles = require('../../../styles/common')

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  wrapper: {
    width: width - 30,
    marginVertical: 10,
    marginHorizontal: 15
  }
})

class Wrapper extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          {this.props.children}
        </View>
      </ScrollView>
    )
  }
}

Wrapper.propTypes = {
  children: PropTypes.node
}


export default Wrapper
