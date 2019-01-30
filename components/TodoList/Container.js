import { compose } from 'redux'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { openTodoEditor } from '../../modules/todo'
import TodoList from './TodoList'

const mapStateToProps = state => ({
  editTodo: state.todo.editTodo
})

const mapDispatchToProps = dispatch => ({
  openTodoEditor: id => dispatch(openTodoEditor(id))
})

export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps)
)(TodoList)

