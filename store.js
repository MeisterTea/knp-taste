import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import { createEpicMiddleware } from 'redux-observable'
import rootReducer from './modules/root'
import rootEpic from './epics/root'

const epicMiddleware = createEpicMiddleware()

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(epicMiddleware)
))

epicMiddleware.run(rootEpic)

export default store
