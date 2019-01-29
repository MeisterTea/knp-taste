import React from 'react'
import { View, Button } from 'react-native'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

const openTodoEditor = navigation => {
  navigation.navigate('TodoEditor', { id: null })
}

const HomeScreen = ({ navigation, todos }) => (
  <View>
    <Button
      title='ADD TODO'
      onPress={ () => openTodoEditor(navigation) }
    />
    <TodoList todos={ todos }/>
  </View>
)

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(HomeScreen)
