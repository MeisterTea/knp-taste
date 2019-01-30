import {
  ofType,
  combineEpics
} from 'redux-observable'
import {
  map,
  filter,
  tap,
  ignoreElements
} from 'rxjs/operators'
import NavigationService from '../navigation/NavigationService'
import {
  OPEN_TODO_EDITOR,
  SET_TITLE,
  SET_CONTENT,
  SET_ID,
  setId,
  addTodo,
  updateTodo,
  resetTodoEditor,
  loadTodo
} from '../modules/todo'

const openTodoEditorEpic = action$ => action$.pipe(
  ofType(OPEN_TODO_EDITOR),
  map(action => action.id),
  map(id => {
    console.log('wololo1')
    if (id !== null) {
      console.log('loading')
      loadTodo(id)
    } else {
      console.log('wololo')
      resetTodoEditor()
    }
  }),
  tap(() => NavigationService.navigate('TodoEditor')),
  ignoreElements()
)

const setIdEpic = (action$, state$) => action$.pipe(
  ofType(SET_TITLE, SET_CONTENT),
  filter(() => state$.value.todo.editTodo.id === null),
  map(() => state$.value.todo.todos.length),
  map(todosCount => setId(todosCount + 1))
)

const updateEpic = (action$, state$) => action$.pipe(
  ofType(SET_ID, SET_TITLE, SET_CONTENT),
  filter(() => state$.value.todo.editTodo.id !== null),
  map(() => {
    const { todos, editTodo } = state$.value.todo
    const todoIndex = todos.findIndex(todo => todo.id === editTodo.id)
    if (todoIndex === -1) return addTodo()
    return updateTodo(todoIndex)
  })
)

export default combineEpics(
  openTodoEditorEpic,
  setIdEpic,
  updateEpic
)
