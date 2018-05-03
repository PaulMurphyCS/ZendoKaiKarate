import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native'

const CommonStyles = require('../../../styles/common')
import { ScrollView, Container } from 'react-native-af-video-player'
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
      <ScrollView>
        <Container style={styles.wrapper}>
          {this.props.children}
        </Container>
      </ScrollView>
    )
  }
}

Wrapper.propTypes = {
  children: PropTypes.node
}


export default Wrapper
