import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import TodoEditor from '../screens/TodoEditor'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  TodoEditor: {
    screen: TodoEditor
  }
})

export default createAppContainer(AppNavigator)
