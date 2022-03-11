import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


export default function App() {


  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        loadingEnabled={true}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}

      >

        <MapView.Marker
          coordinate={{
            latitude:37.78825,
            longitude: -122.4324
          }} 
          title={"Stop 1"}
          description={"Description 1"}
          />

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});