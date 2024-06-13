import { StyleSheet, Text, View, TextInput, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect} from 'react'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Testing = () => {
  // const [data, setData] = useState("")
  const [coffee, setCoffeee] = useState([])
  const [load, setLoad] = useState(true)
  const [coffeeId, setCoffeeeId] = useState()
  const [coffeeName, setCoffeeeName] = useState("")
  const [coffeePrice, setCoffeeePrice] = useState("")

  useEffect(() =>{
    fetchData();
  }, [])
  useEffect((id, name, price) =>{
    addProduct(id, name, price);
    updateProduct(id, name, price);
    deleteProduct(id)
  }, [])

  const fetchData = (() => {
    fetch("http://10.103.6.120:3000/coffee")
    .then(res => res.json())
    .then(json => {
      setCoffeee(json)
      setLoad(false)
    })
    .catch(error => {
      console.log(error)
      setLoad(false)
    })
  })

  if (load){
    <View>
      <Text>LOADING ....</Text>
    </View>
  }
  
  const addProduct = (id, name, price) => {
    fetch(`http://10.103.6.157:3000/coffee`,{
      method: "POST",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        name: name,
        price: price
      })
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
  }
  
  const updateProduct = (id, name, price) => {
    fetch(`http://10.103.6.157:3000/coffee/${id}`,{
      method: "PUT",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        price: price
      })
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
  }

  const deleteProduct = (id) => {
    fetch(`http://10.103.6.157:3000/coffee/${id}`,{
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
  }
    return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#000' />
        <TouchableOpacity onPress={() => updateProduct(coffeeId, coffeeName, coffeePrice)} style={{marginTop: 140, marginBottom: 20, backgroundColor: '#b3b3b3',width: 100, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }} >        
          <Text>change</Text>
        </TouchableOpacity>
        <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
          <TextInput  placeholder='name' style={{backgroundColor: '#d9d9d9',marginRight: 20, width: 80, height: 30}} value={coffeeName} onChangeText={(value) => setCoffeeeName(value)}/>
          <TextInput placeholder='price' style={{backgroundColor: '#d9d9d9',marginLeft: 20, width: 80, height: 30}} value={coffeePrice} onChangeText={(value) => setCoffeeePrice(value)}/>
        </View>
        <TextInput style={{backgroundColor: '#8a8a8a', width: 200}} placeholder='product by id' value={coffeeId} onChangeText={(value) => setCoffeeeId(value)}/> 
      <View style={{display: 'flex', flexDirection: 'row', marginVertical: 20}}>
        <TouchableOpacity onPress={() => addProduct(coffeeId, coffeeName, coffeePrice)} style={{backgroundColor: '#b3b3b3',width: 100, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
          <Text>add product</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteProduct(coffeeId)} style={{backgroundColor: '#b3b3b3',width: 100, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
          <Text>delete product</Text>
        </TouchableOpacity >
      </View>
      <View>
        <FlatList 
          data={coffee}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity style={{maxWidth: 300}}>
              <View style={styles.card}>
                <Image style={styles.img} source={{uri: item.image_url}} />
                <View style={{paddingVertical: 10}}>
                  <Text>ID: {item.id}</Text>
                  <Text style={styles.name}>Name: {item.name}</Text>
                  <Text>Price: {item.price}</Text>
                  <Text style={styles.des}>Description: {item.description}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{marginTop: 100}}>
        <Text>
          ...
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Testing

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 100
    },
    card:{
      backgroundColor: '#d9d9d9',
      margin: 20,
      height: 250,
      flexDirection: 'row',
      borderRadius: 10,
      alignItems: 'center'
    },
    img:{
      width: 100,
      height:200,
    },
    des:{
      maxWidth: 150,
      fontSize: 12
    },
    name:{
      fontSize: 16,
      maxWidth: 150,
    }
})