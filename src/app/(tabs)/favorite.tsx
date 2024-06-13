import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Text, View, TouchableOpacity, StatusBar } from 'react-native';

import { Collapsible } from '@/src/components/Collapsible';
import { ExternalLink } from '@/src/components/ExternalLink';
import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';

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

export default function Favorite() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#000'} />
      <Provider store={store}>
        <Counter />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
