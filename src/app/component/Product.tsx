import { View, Text,StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import  { ProductsData}  from '../../constants/data.js'
import { Ionicons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react';

export default function Product(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://fake-coffee-api.vercel.app/api')
    // fetch('https://mocki.io/v1/79c3f8b4-9857-4b0b-a69a-2fff3a88b9d1')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Image source={require('../../../assets/images/loading.gif')} style={{height: 100, width: 100}} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image_url }} style={styles.image} />
            <Text style={styles.title}>Name: {item.name}</Text>
            <Text style={styles.text}>Description: {item.description}</Text>
            <Text style={styles.text}>Price: {item.price}</Text>
          </View>
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
