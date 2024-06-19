import { View, Text,StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, Touchable, Alert } from 'react-native'
import  { ProductsData}  from '../../constants/data.js'
import { Ionicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react';
import { Redirect, router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from '../../actions/productActions.js'
import { addToCart } from '@/src/actions/cartActions.js';


export default function Product(){
 
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    Alert.alert('Add to Cart successfully')
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
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
                    onPress={() => handleAddToCart(item)}
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
