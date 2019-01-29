export const addTodo = ({ title, content }) => ({
  type: 'ADD_TODO',
  title,
  content
})

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})
