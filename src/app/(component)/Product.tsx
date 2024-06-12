import { View, Text,StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, Touchable } from 'react-native'
import  { ProductsData}  from '../../constants/data.js'
import { Ionicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react';
import { Redirect, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Product(){
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProduct, setFilteredProduct] = useState([])
  const [itemCategory, setItemCategory] = useState([])
  
  useEffect(() => {
    fetch(`http://10.103.6.120:3000/coffee/?category=${itemCategory}`)
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
                <Text style={styles.title}>Name: {item.name}</Text>
                {/* <Text style={styles.text}>Description: {item.description}</Text> */}
                <Text style={styles.text}>Price: {item.price}</Text>
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
    top: -50,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: -50,
    fontSize: 10,

  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#e6e6e6',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000',
    margin: 5,
    flex: 1,

  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text:{
    fontSize: 10,
    marginTop: 10,
  }
});
