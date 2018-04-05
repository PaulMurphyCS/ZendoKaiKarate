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

const styles = StyleSheet.create({
  homeBoxWrapper: {
    width: width - 30,
    marginVertical: 10,
    height: 60,
    marginHorizontal: 15,
    padding: 20
  },
  homeBoxText: {
    color: CommonStyles.styles.colorWhite,
    textAlign:'left',
    fontSize: 16
  }
})

class SubMenuItems extends Component {
  constructor(props) {
    super(props)
    this.SubMenuItemsLink = this.SubMenuItemsLink.bind(this)
  }

  SubMenuItemsLink = () => {
    this.props.navigation.navigate(this.props.link)
  }

  render() {
    return (
      <View >
        <TouchableOpacity
          onPress={this.SubMenuItemsLink}
          title={this.props.title}
          style={[{ backgroundColor: this.props.bgColor }, styles.homeBoxWrapper ] }
        >
          <Text style={styles.homeBoxText}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

SubMenuItems.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  navigation: PropTypes.object,
  bgColor: PropTypes.string
}


export default SubMenuItems
