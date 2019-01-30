import { compose } from 'redux'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { setTitle } from '../../store/reducers/todoReducer'
import TodoEditor from './TodoEditor'

const mapStateToProps = state => ({
  editTodo: state.todos.editTodo
})

const mapDispatchToProps = dispatch => ({
  setTitle: title => dispatch(setTitle(title))
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps, 
  ...ownProps.navigation.state.params
})

export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
)(TodoEditor)

