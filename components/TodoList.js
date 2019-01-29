import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => todos.map(todo => {
  const { id } = todo
  return (
    <Todo
      onPress={ () => {} /*openTodoEditor(id)*/ }
      key={ id }
      title={ todo.title }
      content={ todo.content }
    />
  )
})

export default TodoList
