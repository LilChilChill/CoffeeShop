import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image, StatusBar, ScrollView, Alert} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import ReadMore from '@fawazahmed/react-native-read-more'


export default function Detail() {
  const [sizeSelected, setSizeSelected] = useState('M')
  const [favoriteItems, setFavoriteItem] = useState([])
  const [price, setPrice] = useState(4.53)
  
  const handleSelected = (value) =>{
    setSizeSelected(value)
    if(value == "S"){
      setPrice(3.53)
    } else if (value == 'M'){
      setPrice(4.53)
    } else if (value =='L'){
      setPrice(5.53)
    }
  } 
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={'#000'} />
      
      <View style={styles.head}>
        <TouchableOpacity onPress={() => router.back()} >
          <Ionicons name='chevron-back' size={24}/>
        </TouchableOpacity>
        <Text style={{ color: '#242424', fontSize: 16, fontFamily: 'sora', fontWeight: '600', lineHeight: 19.20, }}>
          Detail
        </Text>
        <TouchableOpacity 
          onPress={() => alert('Add to wishlish success')}
        >
          <Ionicons name='heart-outline' size={24}/>
        </TouchableOpacity>
      </View>

      <View style={styles.productImg}>
        <Image style={{width: "100%", borderRadius: 18}} source={require('../../constants/img/product-detail.png')}/>
      </View>

      <View >
        <Text style={{ marginTop: 16, color: '#242424', fontSize: 20, fontFamily: 'sora', fontWeight: '600', lineHeight: 30,}}>
          Caffee Mocha
        </Text>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{color: '#A2A2A2', fontSize: 12, fontFamily: 'sora', fontWeight: '400', lineHeight: 14.40,}}>
            Ice/Hot
          </Text>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Image style={{width: 36, height: 24,}} source={require('../../constants/img/delivery.png')}/>
            <Image style={{width: 24, height: 24, marginLeft: 20}} source={require('../../constants/img/bean.png')}/>
            <Image style={{width: 30, height: 30, marginLeft: 20}} source={require('../../constants/img/packaging 1.png')}/>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 16, display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
        <Image style={{height: 20, width: 20}} source={require('../../constants/img/Star.png')}/>
        <Text style={{
          color: '#2A2A2A',
          fontSize: 16,
          fontFamily: 'sora',
          fontWeight: '600',
          marginLeft: 4
        }}>
          4.8
        </Text>
        <Text style={{
          color: '#A2A2A2',
          fontSize: 12,
          fontFamily: 'sora',
          fontWeight: '400',
          marginLeft: 5,
          }}>
            (230)
        </Text>
      </View>
      
      <View style={{borderWidth: 1, marginVertical: 16, borderColor: '#E3E3E3'}}></View>

      <Text style={{color: '#242424',
        fontSize: 16,
        fontFamily: 'sora',
        fontWeight: '600',
        lineHeight: 24,
        }}>
        Description
      </Text>

      <View style={{marginTop: 8}}>
        <ReadMore style={styles.description} numberOfLines={3}> 
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque earum ad illo delectus! Exercitationem, sequi natus. Accusamus voluptas, doloribus vero magni itaque placeat quos sequi dicta. Laborum corrupti aliquam hic?
        </ReadMore>
      </View>

      <Text style={{
        marginTop: 24,
        color: '#242424',
        fontSize: 16,
        fontFamily: 'sora',
        fontWeight: '600',
        lineHeight: 24,
        }}>
        Size
      </Text>

      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 16}}>
        <SizeSelection 
          title={'S'}
          onPress={handleSelected}
          value={sizeSelected}
        />
        <SizeSelection 
          title={'M'}
          onPress={handleSelected}
          value={sizeSelected}
        />
        <SizeSelection 
          title={'L'}
          onPress={handleSelected}
          value={sizeSelected}
        />
      </View>

      <View style={{marginTop: 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 16}}>
        <View>
          <Text style={{color: '#909090', fontSize: 14, fontFamily: 'sora', fontWeight: '400', lineHeight: 16.80,}}>
            Price
          </Text>
          <Text style={styles.price}>
            $ {price}
          </Text>
        </View>
        <TouchableOpacity style={styles.buyBtn} onPress={() => router.push('Order')}>
          <Text style={styles.buyText}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

function SizeSelection({ title, onPress, value}) {
  return(
    <TouchableOpacity 
      style={[styles.sizeBtn, {borderColor: value === title?'#C67C4E':'#E3E3E3', backgroundColor: value === title? '#F9F2ED' : '#E3E3E3'}]} 
      onPress={() => onPress(title)}
      >
      <Text style={[styles.sizeText, {color: value === title ? '#C67C4E' : '#000' }]} >
        {title}
      </Text>
    </TouchableOpacity>
  );  
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal: 24,
  },
  head:{
    marginTop: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productImg:{
    marginTop: 24,
    display: 'flex',
    alignItems: 'center',
  },
  description:{
    color: '#A2A2A2',
    fontSize: 14,
    fontFamily: 'sora',
    fontWeight: '300',
    lineHeight: 21,
  },
  sizeBtn:{
    borderColor: '#E3E3E3',
    borderRadius: 12,
    borderWidth: 1,
    width: 96,
    height: 41,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sizeText:{
    color: '#242424',
    fontSize: 14,
    fontFamily: 'sora',
    fontWeight: '400',
    lineHeight: 21,
  },
  price:{
    color: '#C67C4E',
    fontSize: 18,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 27,
  },
  buyBtn:{
    width: 217,
    height: 56,
    backgroundColor: '#C67C4E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  buyText:{
    color: '#fff',
    fontSize: 16,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 24,
  }
})