import { View, Text,StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, Touchable } from 'react-native'
import  { ProductsData}  from '../../constants/data.js'
import { Ionicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react';
import { Redirect, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';


export default function Product(){
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProduct, setFilteredProduct] = useState([])
  
  useEffect(() => {
    fetch(`http://10.103.6.120:3000/coffee`)
    // fetch('http://localhost:3000/coffee')
      .then(response => response.json())
      .then(json => {
        setProduct(json);
        setFilteredProduct(json)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  const showToast = () => {
    Toast.show({
      type:'success',
      position: 'bottom',
      text1: 'Success',
      text2: 'Add to cart',
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 60,
      bottomOffset: 40,
    });
  }

  const addToCart = async () => {
    try{

    } catch(error) {
      console.log(error)
    }

  }
  
  return (
    <View style={styles.container}>
        <FlatList
          data={product}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => router.push('Detail')}>
              <View >
                <Image source={{ uri: item.image_url }} style={styles.image} />
                <Text style={styles.title}>{item.name}</Text>
                {/* <Text style={styles.text}>Description: {item.description}</Text> */}
                <View style={{display: 'flex', flexDirection: 'row',justifyContent: 'space-between', marginTop: 12}}>
                  <Text style={styles.price}>$ {item.price}</Text>
                  <TouchableOpacity 
                    style={{width: 32, height: 32, backgroundColor:'#C67C4E', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}
                    onPress={() => showToast()}
                    >
                    <Ionicons name='add-outline' size={24} color={'#fff'}/>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={{position: 'absolute', top: 10, left: 10}} >
                <Ionicons name='heart-outline' size={20} />
              </TouchableOpacity>
              <Text style={{position: 'absolute', top: 10, right: 10}}>
                <Image source={require('../../constants/img/Star.png')} /> 4.8
              </Text>
            </TouchableOpacity>
          )}
        />
    </View>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    top: -60,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: -70,
    fontSize: 10,

  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000',
    margin: 5,
    flex: 1,

  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 8,
  },
  title: {
    color: '#242424',
    fontSize: 16,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 24,
  },
  price:{
    color: '#050505',
    fontSize: 18,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 27,
  }
});
