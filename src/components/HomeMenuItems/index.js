import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'

const CommonStyles = require('../../../styles/common')

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  homeBoxWrapper: {
    backgroundColor: CommonStyles.styles.colorYellow,
    width: (width / 2) - 30,
    marginVertical: 15,
    height: (height / 4.5),
    marginHorizontal: 15,
    padding: 15
  },
  homeBoxText: {
    color: CommonStyles.styles.colorBlack,
    textAlign:'center',
    fontSize: 16
  }
})

class HomeMenuItems extends Component {
  constructor(props) {
    super(props)
    this.HomeMenuItemsLink = this.HomeMenuItemsLink.bind(this)
  }

  HomeMenuItemsLink = () => {
    this.props.navigation.navigate(this.props.link)
  }

  render() {
    return (
      <View >
        <TouchableOpacity
          onPress={this.HomeMenuItemsLink}
          title={this.props.title}
          style={styles.homeBoxWrapper}
        >
          <Text style={styles.homeBoxText}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

HomeMenuItems.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  navigation: PropTypes.object
}


export default HomeMenuItems
