import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View
} from 'react-native'

const CommonStyles = require('../../../styles/common')

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 15,
    marginHorizontal: 15
  }
})

class Wrapper extends Component {
  render() {
    return (
      <View
      // style={styles.wrapper}
      >
        {/* {this.props.children} */}
      </View>
    )
  }
}

// Wrapper.propTypes = {
//   children: PropTypes.node
// }

export default Wrapper
