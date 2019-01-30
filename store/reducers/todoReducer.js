import NavigationService from '../../navigation/NavigationService'

const OPEN_TODO_EDITOR = 'OPEN_TODO_EDITOR'
const ADD_TODO = 'ADD_TODO'
const SET_TITLE = 'SET_TITLE'

const INITIAL_STATE = {
  editTodo: {
    title: ''
  },
  todos: [
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
}

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
    case OPEN_TODO_EDITOR: {
      const { id } = action
      NavigationService.navigate('TodoEditor', { id })
      return state
    }
    case SET_TITLE: {
      return {
        ...state,
        editTodo: {
          ...state.editToo,
          title: action.title
        }
      }
    }
    default:
      return state
  }
}

export const openTodoEditor = id => ({
  type: OPEN_TODO_EDITOR,
  id
})

export const addTodo = ({ title, content }) => ({
  type: ADD_TODO,
  title,
  content
})

export const setTitle = title => ({
  type: SET_TITLE,
  title
})

export default todos
