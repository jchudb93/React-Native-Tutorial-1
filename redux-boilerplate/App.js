import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';

import store from './app/store'
import Home from './app/components/home'


export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Home/>
        </Provider>
    );
  }
}
