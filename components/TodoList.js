import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => todos.map(({ id, title, content }) => {
  return (
    <Todo
      onPress={ () => {} /*openTodoEditor(id)*/ }
      key={ id }
      title={ title }
      content={ content }
    />
  )
})

export default TodoList
