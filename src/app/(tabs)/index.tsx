import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Product from '../(component)/Product';
import React, {useState, useEffect} from 'react';
import Categories from '../(component)/Categories';

const categories = ['All Coffee', 'Machiato', 'Latte', 'Americano' ]
const  Home = () => {
  const [selectedCategory, setSelectedCategory] = useState([])
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#313131','#111111']} start={{x:0, y:1}} end={{x:1, y:0}} style={styles.headerContainer}>
        <Text style={{
            color: '#A2A2A2',
            fontSize: 12,
            fontFamily: 'sora',
            fontWeight: '400',
            lineHeight: 14.40,
            letterSpacing: 0.12,
            paddingHorizontal: 20,
            bottom: 50
          }}> 
          Location
        </Text>
        <Text style={{
            color: '#D8D8D8',
            fontSize: 14,
            fontFamily: 'sora',
            fontWeight: '600',
            lineHeight: 21,
            paddingHorizontal: 20,
            bottom: 50,
          }}> 
          Bilzen, Tanjungbalai <Ionicons name='chevron-down-outline' size={15}  />
        </Text>
      </LinearGradient>
        <View style={{ display: 'flex',flexDirection: "row", alignItems: 'center', alignContent: 'center', justifyContent:'center', bottom: 150}}>
          <View style={styles.searchContainer}>
            <View style={styles.searchBtn}>
              <Ionicons name='search-outline' size={25} color={'#fff'} />
            </View>
            <View style={styles.searchInput}>
              <TextInput
                placeholder='Search coffees...'
                placeholderTextColor={'#A2A2A2'}
                style={styles.input}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Text>
            <Ionicons name='filter-outline' size={18}  color={'#fff'} />
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerBanner}>
          <Image style={styles.banner} source={require('../../constants/img/banner-1.png')} />
          <Text style={styles.bannerText}>Promote</Text>
          <LinearGradient colors={['#181818','#3e3e3e']} start={{x:0, y:0}} end={{x:0, y:1}} style={{width: 205, height: 28, position:'absolute', top: 55, left: 36}}>
            <View>
            <Text style={{
              color:'#fff', 
              position: 'absolute', 
              top: -22,
              left: 5,
              fontSize: 32,
              fontFamily: 'sora',
              fontWeight: '600',
              }}>
              Buy one get
            </Text>
            </View>
          </LinearGradient>
          <LinearGradient colors={['#181818','#3e3e3e']} start={{x:0, y:0}} end={{x:0, y:1}} style={{width: 150, height: 28, position:'absolute', bottom: 15, left: 36}}>
            <View>
            <Text style={{
              color:'#fff', 
              position: 'absolute', 
              top: -22,
              left: 2,
              fontSize: 32,
              fontFamily: 'sora',
              fontWeight: '600',
              }}>
              one FREE
            </Text>
            </View>
          </LinearGradient>
        </View>
      
      <View>
        <FlatList
        style={{position: 'absolute',bottom: 70, marginHorizontal: 20}}
          data={categories}
          renderItem={({item}) => (
            <Categories 
              item={item}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}
          keyExtractor={(item) => item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Product />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',

  },
  headerContainer:{
    display: 'flex',
    justifyContent: 'center',
    height: 280,
  },
  headerContainerText:{
    color: '#fff',
  },
  searchContainer:{ 
    backgroundColor: '#2A2A2A', 
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    height: 52, 
    width: 259, 
    borderRadius: 12 
  },
  searchInput: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  searchBtn: {
    paddingLeft: 16,
  },
  input:{
    color: '#fff',
    paddingRight: 10
  },

  filterBtn:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C67C4E',
    width: 52,
    height: 52,
    borderRadius: 12,
    marginLeft: 16,
  },
  headerBanner:{
    display: 'flex',
    alignItems: 'center',
    height: 140,
    bottom: 120,

  },
  banner:{
    borderRadius: 12
  },
  bannerText:{
    display: 'flex',
    position: 'absolute',
    backgroundColor: '#ED5151',
    width: 60,
    height: 24,
    color: 'white',
    fontSize: 12,
    fontFamily: 'sora',
    fontWeight: '600',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    top: 12,
    left: 36,
  },
  bodyContainer:{
  },

})