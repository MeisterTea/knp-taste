import 'react-native'
import React from 'react'
import TitledTextInput from '../TitledTextInput'
import renderer from 'react-test-renderer'

const DEFAULT_TITLE = 'defaultTitle'
const DEFAULT_VALUE = 'defaultValue'

describe('TitledTextInput', () => {
  jest.useFakeTimers()

  it('renders correctly', async () => {
    const onChangeText = jest.fn()
    const tree = renderer.create(<TitledTextInput
      title={ DEFAULT_TITLE }
      value={ DEFAULT_VALUE }
      onChangeText={ onChangeText }
    />)

    expect(tree.root.findByType('Text').children[0])
      .toBe(DEFAULT_TITLE)

    expect(tree.root.findByType('TextInput').props.value)
      .toBe(DEFAULT_VALUE)
  })

  it('calls the onChangeText method', async () => {
    const onChangeText = jest.fn()
    const tree = renderer.create(<TitledTextInput
      title={ DEFAULT_TITLE }
      value={ DEFAULT_VALUE }
      onChangeText={ onChangeText }
    />)
    const textInput = tree.root.findByType('TextInput')
    const WOLOLO = 'WOLOLO'
    textInput.props.onChangeText(WOLOLO)

    expect(onChangeText).toHaveBeenCalledWith(WOLOLO)
  })
})
