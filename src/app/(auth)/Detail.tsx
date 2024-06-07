import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image, StatusBar} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Detail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#000'} />
      <View style={styles.head}>
        <TouchableOpacity >
          <Ionicons name='chevron-back' size={24}/>
        </TouchableOpacity>
        <Text style={{ color: '#242424', fontSize: 16, fontFamily: 'sora', fontWeight: '600', lineHeight: 19.20, }}>
          Detail
        </Text>
        <TouchableOpacity>
          <Ionicons name='heart-outline' size={24}/>
        </TouchableOpacity>
      </View>

      <View style={styles.productImg}>
        <Image style={{width: "100%", borderRadius: 18}} source={require('../../constants/img/product-detail.png')}/>
      </View>

      <View >
        <Text style={{ marginTop: 16, color: '#242424', fontSize: 20, fontFamily: 'sora', fontWeight: '600', lineHeight: 30,}}>
          Caffee Mocha
        </Text>
        <View>
          <Text style={{color: '#A2A2A2', fontSize: 12, fontFamily: 'sora', fontWeight: '400', lineHeight: 14.40,}}>
            Ice/Hot
          </Text>
          <View>
            <Image source={require('../../constants/img/ship.png')}/>
            <Image source={require('../../constants/img/bean.png')}/>
            <Image source={require('../../constants/img/pack.png')}/>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 16, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Image style={{height: 20, width: 20}} source={require('../../constants/img/Star.png')}/>
        <Text style={{
          color: '#2A2A2A',
          fontSize: 16,
          fontFamily: 'sora',
          fontWeight: '600',
          marginLeft: 4
        }}>
          4.8
        </Text>
        <Text style={{
          color: '#A2A2A2',
          fontSize: 12,
          fontFamily: 'sora',
          fontWeight: '400',
          marginLeft: 5,
          }}>
            (230)
        </Text>
      </View>

      <View style={{borderWidth: 1, marginVertical: 16, borderColor: '#E3E3E3'}}></View>

      <Text style={{color: '#242424',
        fontSize: 16,
        fontFamily: 'sora',
        fontWeight: '600',
        lineHeight: 24,
        }}>
        Description
      </Text>

      <View style={{marginTop: 8}}>
        <Text style={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque earum ad illo delectus! Exercitationem, sequi natus. Accusamus voluptas, doloribus vero magni itaque placeat quos sequi dicta. Laborum corrupti aliquam hic?
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Detail

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal: 24
  },
  head:{
    marginTop: 68,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productImg:{
    marginTop: 24,
    display: 'flex',
    alignItems: 'center',
  },
  description:{
    color: '#A2A2A2',
    fontSize: 14,
    fontFamily: 'sora',
    fontWeight: '300',
    lineHeight: 21,
  }
})