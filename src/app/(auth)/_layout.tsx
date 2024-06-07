import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='Management' />
        <Stack.Screen name='Detail'  options={{headerShown: false}}/>
    </Stack>
  )
}

export default _layout
