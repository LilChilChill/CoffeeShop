import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StatusBar, StyleSheet, View } from 'react-native';


export default function Profile() {
   
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#000'}/>
      {/* <MapView style={styles.map}
        initialRegion={{
          latitude: 21.04157972362574, 
          latitudeDelta: 0.006356968825954823,
          longitude: 105.84682831540704, 
          longitudeDelta: 0.003180094063282013
        }} 
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});