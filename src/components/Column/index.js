import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native'

const CommonStyles = require('../../../styles/common')
const {width, height} = Dimensions.get('window')

const Column = (props) => {
  let numberOfColumns
  if (props.numberOfColumns == 1) {
    numberOfColumns = width/numberOfColumns - 20
  } else {
    numberOfColumns = width/props.numberOfColumns - 20
  }
  const styles = StyleSheet.create({
    column: {
      width: numberOfColumns,
      flexWrap: 'wrap'
    }
  })
    return (
      <Text
        numberOfLines={3}
        style={styles.column}
      >
          {props.children}
      </Text>
    )
}

Column.propTypes = {
  children: PropTypes.node,
  numberOfColumns: PropTypes.number
}


export default Column
