import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  Button
} from 'react-native'

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
      <View>
        <Button
          onPress={this.HomeMenuItemsLink}
          title={this.props.title}
        >
          <Text>{this.props.title}</Text>
        </Button>
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
