import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import TitledTextInput from '../../components/atoms/TitledTextInput'

const TodoEditor = ({
  setTitle,
  editTodo
}) => {
  const { title } = editTodo
  return (
    <View style={ styles.main }>
      <TitledTextInput
        onChangeText={ setTitle }
        title='title'
        value={ title }
      />
    </View>
  )
}

TodoEditor.propTypes = {
  setTitle: PropTypes.func.isRequired,
  editTodo: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center'
  }
})

export default TodoEditor
