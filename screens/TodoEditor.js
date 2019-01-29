import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import TitledTextInput from '../components/atoms/TitledTextInput'

export default class EditTodoScreen extends Component {
  state = {
    title: ''
  }

  componentWillMount() {
    this.props = {
      ...this.props,
      ...this.props.navigation.state.params
    }
  }

  render() {
    return (
      <View style={ styles.main }>
        <TitledTextInput
          onChangeText={ this.setTitle }
          title='title'
          value={ this.state.title }
        />
      </View>
    )
  }

  setTitle = title => {
    this.setState({ title })
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center'
  }
})
