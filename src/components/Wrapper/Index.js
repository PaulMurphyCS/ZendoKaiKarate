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
    width: width - 20,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 15
  }
})

class Wrapper extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          {this.props.children}
        </ScrollView>
      </View>
    )
  }
}

Wrapper.propTypes = {
  children: PropTypes.node
}


export default Wrapper
