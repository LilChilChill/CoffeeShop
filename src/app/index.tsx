import { Image, StyleSheet, Platform, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Redirect, router } from 'expo-router';
import * as React from 'react';

 function Splash(){
  return (
    <View style={styles.container}>
      <Image resizeMode='contain' source={require('../constants/img/splash.png')} style={styles.img} />
      <Text style={styles.textContainer}>Fall in Love with Coffee in Blissful Delight!</Text>
      <Text style={styles.textSmall}>
        Welcome to our cozy coffee corner, where every cup is a delightful for you.
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => router.push('(tabs)')}>
        <Text style={{
          color: 'white',
          fontSize: 16,
          fontFamily: 'sora',
          fontWeight: '600',
          lineHeight: 24,
        }}>
        Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Splash

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000'
  },
  img: {
  },
  textContainer: {
    maxWidth: 320,
    position: 'absolute',
    bottom: 210,
    textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 48,
    letterSpacing: 0.16,
  },
  textSmall: {
    maxWidth: 310,
    position: 'absolute',
    bottom: 150,
    textAlign: 'center',
    color: '#A2A2A2',
    fontSize: 14,
    fontFamily: 'sora',
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.14,
  },
  btn: {
    backgroundColor: '#C67C4E',
    position: 'absolute',
    bottom: 50,
    width: 320,
    height: 60,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
