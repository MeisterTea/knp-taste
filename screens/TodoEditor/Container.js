import { compose } from 'redux'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { setTitle, setContent } from '../../modules/todo'
import TodoEditor from './TodoEditor'

const mapStateToProps = state => ({
  editTodo: state.todo.editTodo
})

const mapDispatchToProps = dispatch => ({
  setTitle: title => dispatch(setTitle(title)),
  setContent: content => dispatch(setContent(content))
})

export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps),
)(TodoEditor)

