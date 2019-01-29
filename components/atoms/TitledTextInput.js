import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'

export default function TitledTextInput(props) {
  return (
    <View style={ styles.titledTextInput }>
      <Text style={ styles.title }>{ props.title }</Text>
      <TextInput onChangeText={ props.onChangeText }
        value={ props.value }
        style={ styles.input }/>
    </View>
  )
}

TitledTextInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  titledTextInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    marginRight: 3
  },
  input: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
})
