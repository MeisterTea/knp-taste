export const OPEN_TODO_EDITOR = 'OPEN_TODO_EDITOR'
export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const SET_ID = 'SET_ID'
export const SET_TITLE = 'SET_TITLE'
export const SET_CONTENT = 'SET_CONTENT'
export const SET_TODO = 'SET_TODO'
export const LOAD_TODO = 'LOAD_TODO'
export const RESET_TODO_EDITOR = 'RESET_TODO_EDITOR'

const getInitialState = () => ({
  editTodo: {
    id: null,
    title: '',
    content: '',
    complete: false,
    pinned: false
  },
  todos: [
    {
      id: 0,
      title: 'title1',
      content: 'content1',
      complete: false,
      pinned: false
    },
    {
      id: 1,
      title: 'title2',
      content: 'content2',
      complete: false,
      pinned: false
    }
  ]
})

const todos = (state = getInitialState(), action) => {
  switch (action.type) {
    case LOAD_TODO: {
      const editTodo = state.todos.filter(todo => todo.id === action.id)
      return {
        ...state,
        editTodo
      }
    }
    case RESET_TODO_EDITOR: {
      return {
        ...state,
        editTodo: getInitialState().editTodo
      }
    }
    case SET_ID: {
      return {
        ...state,
        editTodo: {
          ...state.editTodo,
          id: action.id
        }
      }
    }
    case SET_TITLE: {
      return {
        ...state,
        editTodo: {
          ...state.editTodo,
          title: action.title
        }
      }
    }
    case SET_CONTENT: {
      return {
        ...state,
        editTodo: {
          ...state.editTodo,
          content: action.content
        }
      }
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          state.editTodo
        ]
      }
    }
    case UPDATE_TODO: {
      state.todos.splice(action.index, 1, state.editTodo)
      return {
        ...state,
        todos: state.todos.slice()
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

export const setId = id => ({
  type: SET_ID,
  id
})

export const setTitle = title => ({
  type: SET_TITLE,
  title
})

export const setContent = content => ({
  type: SET_CONTENT,
  content
})

export const addTodo = () => ({
  type: ADD_TODO
})

export const updateTodo = index => ({
  type: UPDATE_TODO,
  index
})

export const loadTodo = id => ({
  type: LOAD_TODO,
  id
})

export const resetTodoEditor = () => ({
  type: RESET_TODO_EDITOR
})

export default todos
