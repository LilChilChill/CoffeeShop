import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Categories = ({item, selectedCategory, setSelectedCategory}) => {
  return (
    <TouchableOpacity style={styles.category} onPress={() => setSelectedCategory(item)}>
        <View style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <Text style={[styles.text, selectedCategory === item && {
            backgroundColor: '#C67C4E',
            borderRadius: 6,
            color: '#FFF',
            width: 87,
            height: 29
        }]}>{item}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Categories

const styles = StyleSheet.create({
    category:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#fff',
    },
    text:{
        color: '#313131',
        fontSize: 14,
        fontFamily: 'sora',
        fontWeight: '400',
        lineHeight: 21,
        width: 87,
        height: 29,
        textAlign: 'center'
    }
})