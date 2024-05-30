import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const  Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={{
            color: '#A2A2A2',
            fontSize: 12,
            fontFamily: 'sora',
            fontWeight: '400',
            lineHeight: 14.40,
            letterSpacing: 0.12,
            paddingHorizontal: 20,
          }}> 
          Location
        </Text>
        <Text style={{
            color: '#D8D8D8',
            fontSize: 14,
            fontFamily: 'sora',
            fontWeight: '600',
            lineHeight: 21,
            paddingHorizontal: 20,
          }}> 
          Bilzen, Tanjungbalai
        </Text>
      </View>
      <View style={{ flex: 1,flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center', alignContent: 'center', backgroundColor: '#A2A2A2',width: 250, maxHeight: 52,alignSelf:'center', borderRadius: 12, }}>
        <View style={styles.searchBtn}>
          <Ionicons name='search-outline' size={25} />
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder='Search coffees...'
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text>Home</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer:{
    display: 'flex',
    justifyContent: 'center',
    height: 200,
    // backgroundColor: 'linear-gradient(241deg, #111111 0%, #313131 100%)'
    backgroundColor: '#333333',
  },
  headerContainerText:{
    color: '#fff',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'flex-start',

  },
  searchBtn: {
    paddingLeft: 16,
  },
  bodyContainer:{
  }
})