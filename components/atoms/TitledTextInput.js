import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'

const TitledTextInput = ({ value, title, onChangeText }) =>
  <View style={ styles.titledTextInput }>
    <Text style={ styles.title }>{ title }</Text>
    <TextInput onChangeText={ onChangeText }
      value={ value }
      style={ styles.input }/>
  </View>

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

export default TitledTextInput
