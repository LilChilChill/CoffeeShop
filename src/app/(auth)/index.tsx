import { Image, StyleSheet, Platform, View, Text, ImageBackground, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image resizeMode='contain' source={require('../../constants/img/splash.png')} style={styles.img} />
      <Text style={styles.textContainer}>Fall in Love with Coffee in Blissful Delight!</Text>
      <Text style={styles.textSmall}>
        Welcome to our cozy coffee corner, where every cup is a delightful for you.
      </Text>
      <TouchableOpacity style={styles.btn}>
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

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center'
  },
  img: {
  },
  textContainer: {
    maxWidth: 320,
    position: 'absolute',
    bottom: 180,
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
    bottom: 120,
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
    bottom: 20,
    width: 320,
    height: 60,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
