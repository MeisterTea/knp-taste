import React from 'react'
import { View, TouchableNativeFeedback, Text } from 'react-native'
import PropTypes from 'prop-types'

const Todo = ({ onPress, title, content }) => 
  <TouchableNativeFeedback onPress={ onPress }>
    <View>
      <Text>{ title }</Text>
      <Text>{ content }</Text>
    </View>
  </TouchableNativeFeedback>


Todo.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default Todo
