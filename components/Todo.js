import React from 'react'
import { View, TouchableNativeFeedback, Text } from 'react-native'
import PropTypes from 'prop-types'

export default function Todo({ onPress, title, content }) {
  return (
    <TouchableNativeFeedback onPress={ onPress }>
      <View>
        <Text>{ title }</Text>
        <Text>{ content }</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

Todo.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
