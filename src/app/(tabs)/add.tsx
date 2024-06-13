import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState, useEffect} from 'react'
import { router } from 'expo-router'

import { Provider, useDispatch, useSelector, } from 'react-redux';
import store from '../(component)/store';
import { increment, decrement } from '../(component)/actions';

function Counter() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  console.log(count)
  return (
    <View>
      <Text>
        Count: {count}
      </Text>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>increment</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>decrement</Text>
      </TouchableOpacity>
    </View>
  )
}

const add = () => {
    return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{backgroundColor: '#d9d9d9', height: 50, width: 160, borderRadius: 12, display: 'flex', justifyContent: 'center'}} onPress={() => router.push('Management')}>
        <Text style={{textAlign: 'center' }}>Management product</Text>
      </TouchableOpacity>

      <Provider store={store}>
        <Counter />
      </Provider> 
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