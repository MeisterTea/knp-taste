import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import todo, { openTodoEditor } from './todo'

export const rootEpic = combineEpics(
  openTodoEditor
)

export const rootReducer = combineReducers({
  todo
})
