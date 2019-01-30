import { connect } from 'react-redux'
import { compose } from 'redux'
import HomeScreen from './HomeScreen'
import { openTodoEditor } from '../../store/reducers/todoReducer'

const mapStateToProps = state => ({
  todos: state.todos.todos
})

const mapDispatchToProps = dispatch => ({
  openTodoEditor: id => dispatch(openTodoEditor(id))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(HomeScreen)
