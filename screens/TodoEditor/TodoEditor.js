import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import PropTypes from 'prop-types'
import TitledTextInput from '../../components/atoms/TitledTextInput'

const TodoEditor = ({
  setTitle,
  setContent,
  editTodo
}) => {
  const {
    title,
    content
  } = editTodo
  return (
    <View style={ styles.main }>
      <TitledTextInput
        onChangeText={ setTitle }
        title='title'
        value={ title }
      />
      <TextInput
        multiline={ true }
        numberOfLines={ 5 }
        onChangeText={ setContent }
        value={ content }/>
    </View>
  )
}

TodoEditor.propTypes = {
  setTitle: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired,
  editTodo: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center'
  }
})

export default TodoEditor
