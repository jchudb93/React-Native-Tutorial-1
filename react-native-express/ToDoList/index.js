import { AppRegistry, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Import the App container component
import { reducer } from './todoListRedux'

import ToDoList from './App'

const AppWithStore = () => {
    <Provider>
        <App />
    </Provider>
}

AppRegistry.registerComponent('ToDoList', () => AppWithStore)
