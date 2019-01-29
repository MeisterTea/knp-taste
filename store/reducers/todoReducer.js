import { ADD_TODO } from '../constants/todo'

const INITIAL_STATE = [
  {
    id: '001',
    title: 'title1',
    content: 'content1'
  },
  {
    id: '002',
    title: 'title2',
    content: 'content2'
  }
]

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { title, content } = action
      const id = state.todos.length + 1
      return [
        ...state,
        {
          id,
          title,
          content
        }
      ]
    }
    default:
      return state
  }
}

export default todos
