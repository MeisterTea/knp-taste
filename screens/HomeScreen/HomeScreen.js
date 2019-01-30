import React from 'react'
import { View, Button } from 'react-native'
import PropTypes from 'prop-types'
import TodoList from '../../components/TodoList'

const HomeScreen = ({
  todos,
  openTodoEditor
}) => (
  <View>
    <Button
      title='ADD TODO'
      onPress={ () => openTodoEditor(null) }
    />
    <TodoList todos={ todos }/>
  </View>
)

HomeScreen.propTypes = {
  openTodoEditor: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}

export default HomeScreen
