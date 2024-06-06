import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect} from 'react'

const add = () => {
  const [data, setData] = useState([])

  const addProduct = () => {
    // fetch("https://mocki.io/v1/79c3f8b4-9857-4b0b-a69a-2fff3a88b9d1", {
      fetch("https://fake-coffee-api.vercel.app/api",{
      method: "POST",
      body: JSON.stringify({
        name: "Heavenly Spice",
        description: "Comforting",
        price: 89.99,
        region: "South Asia",
        image_url: "https://cdn11.bigcommerce.com/s-4iv4za1ziu/images/stencil/1280x1280/products/174/7393/SCOOP-10oz-Heavenly-Caramel-Coffee-Ground-web__87190.1683054146.jpg?c=1"
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    }
  
  const deleteProduct = (id) => {
    fetch("https://ca625f1d306a074c71fa.free.beeceptor.com/api/users/",{
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
  }
    return (
    <View style={styles.container}>
      <TextInput style={{backgroundColor: '#8a8a8a', width: 200}} placeholder='delet product by id'/>  
      <TouchableOpacity onPress={addProduct}>
        <Text>add product</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(id) => deleteProduct}>
        <Text>delete product</Text>
      </TouchableOpacity>
    </View>
  )
}

export default add

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})