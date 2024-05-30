import { View, Text,StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import  { ProductsData}  from '../../constants/data.js'
import { Ionicons } from '@expo/vector-icons'

export default function product(){
  return (
    <ScrollView>
      {ProductsData.map((item) => (
        <View style={styles.container}>
        <View>
          <Image style={styles.img} source={item.img} />
          <View style={styles.stats}>
            <Image source={item.stats.star}/>
            <Text style={{color: '#fff', fontFamily: 'sora', paddingLeft: 3}}>{item.stats.rate}</Text>
          </View>
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.nameCall}>{item.nameCall}</Text>
        <View style={styles.priceAdd}>
          <Text style={styles.price}>$ {item.price}</Text>
          <TouchableOpacity style={{backgroundColor: '#C67C4E', width: 30, height: 30, borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name='add-outline'  size={16} color={'#fff'}/>
          </TouchableOpacity>
        </View>
      </View>
      ))}
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    maxWidth: 200,
    paddingBottom: 20,
    
  },
  name:{
    color: '#242424',
    fontSize: 16,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 24,
  },
  nameCall:{
    color: '#A2A2A2',
    fontSize: 12,
    fontFamily: 'sora',
    fontWeight: '400',
    lineHeight: 14.40,
    paddingTop: 10,
  },
  price:{
    color: '#050505',
    fontSize: 18,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 27,
  },
  img:{
    borderRadius: 12,
  },
  stats:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    top: 10
  },
  priceAdd:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
})