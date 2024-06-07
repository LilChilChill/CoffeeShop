import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState, useEffect} from 'react'
import { router } from 'expo-router'

const add = () => {
    return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{backgroundColor: '#d9d9d9', height: 50, width: 160, borderRadius: 12, display: 'flex', justifyContent: 'center'}} onPress={() => router.push('Management')}>
        <Text style={{textAlign: 'center' }}>Management product</Text>
      </TouchableOpacity>
    </SafeAreaView>
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