import {
  ofType,
  combineEpics
} from 'redux-observable'
import {
  map,
  tap,
  ignoreElements
} from 'rxjs/operators'
import NavigationService from '../navigation/NavigationService'
import { OPEN_TODO_EDITOR } from '../modules/todo'

const openTodoEditorEpic = action$ => action$.pipe(
  ofType(OPEN_TODO_EDITOR),
  map(action => action.id),
  tap(id => NavigationService.navigate('TodoEditor', { id })),
  ignoreElements()
)

export default combineEpics(
  openTodoEditorEpic
)
