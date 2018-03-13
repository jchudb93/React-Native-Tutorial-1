import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet, FlatList, Text } from 'react-native'

import Toggle from './Toggle'

const rows = [
  {id: 0, text: 'View'},
  {id: 1, text: 'Text'},
  {id: 2, text: 'Image'},
  {id: 3, text: 'ScrollView'},
  {id: 4, text: 'ListView'},
]

const extractKey = ({id}) => id

class App extends Component {

  renderItem = ({item}) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

  render() {
    return(
      <FlatList style={styles.container} data={rows} renderItem={this.renderItem} keyExtractor={extractKey}/>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})

export default App;

AppRegistry.registerComponent('App', () => App)
