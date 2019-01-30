import { connect } from 'react-redux'
import { compose } from 'redux'
import HomeScreen from './HomeScreen'
import { openTodoEditor } from '../../modules/todo'

const mapStateToProps = state => ({
  todos: state.todo.todos
})

const mapDispatchToProps = dispatch => ({
  openTodoEditor: id => dispatch(openTodoEditor(id))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(HomeScreen)
