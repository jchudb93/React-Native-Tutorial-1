import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet, FlatList, Text } from 'react-native'
import MapView from 'react-native-maps'

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
    const { region } = this.props;
    console.log(region);

    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    StyleSheet.absoluteFillObject,
  },
})

export default App;

AppRegistry.registerComponent('App', () => App)
