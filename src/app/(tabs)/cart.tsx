// import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Alert, StatusBar } from 'react-native'
// import React, { useState } from 'react'
// import { Ionicons } from '@expo/vector-icons'
// import { router } from 'expo-router'
// import Toast from 'react-native-toast-message'

// import { Provider, useDispatch, useSelector, } from 'react-redux';
// import store from '../(component)/store';
// import { increment, decrement } from '../(component)/actions';

// const Cart = () => {
//   const [productNum, setProductNum] = useState(1)
//   const [price, setPrice] = useState(4.53)
//   const handleAddProduct = () => {
//     setProductNum(productNum + 1)
//   }
//   const handleromoveProduct = () => {
//     if(productNum <= 1){
//       return false
//     }else{
//       setProductNum(productNum - 1)
//     }
//   }

//   const orderPriceAdd = () => {
//     setPrice(price + 4.53)
//   }
//   const orderPriceRemove = () => {
//     if (price <= 4.53){
//       return false
//     }else{
//       setPrice(price - 4.53)
//     }
//   }


//   const [selection, setSelection] = useState(null)
//   const handleSelection = (value) => {
//     setSelection(value)
//   }
//   const handleOrder = () => {
//     Toast.show({
//       type:'success',
//       text1:'Successful', 
//       text2: 'Order Successful'
//     })
//   }
//   return (
//     <ScrollView style={styles.container}>
//       <StatusBar backgroundColor={'#000'} />
//       <View style={styles.head}>
//         <TouchableOpacity 
//           onPress={() => router.back()}
//         >
//           <Ionicons name='chevron-back' size={24} />    
//         </TouchableOpacity>
//         <Text style={styles.headText}>
//             Order
//         </Text>
//         <TouchableOpacity onPress={() => router.navigate('(tabs)')}>
//             <Ionicons name='home-outline' size={24} />
//         </TouchableOpacity>
//       </View>  
      
//       <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#EDEDED', width: 317, height: 43, alignItems: 'center', marginTop: 36.5, marginHorizontal: 24 }}>
//         <Selection 
//           title={'Delivery'}
//           onPress={handleSelection}
//           value={selection}
//         />
//         <Selection 
//           title={'Pick up'}
//           onPress={handleSelection}
//           value={selection}
//         />
//       </View>

//       <View>
//         <Text style={styles.title}>
//           Delivery Address
//         </Text>
//         <Text style={styles.location}>
//           Delivery Address
//         </Text>
//         <Text style={styles.address}>
//           Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
//         </Text>
//       </View>

//       <View style={{marginTop: 16, display: 'flex', flexDirection: 'row', marginLeft: 24}}>
//         <TouchableOpacity style={styles.editAddress}>
//           <Image source={require('../../constants/img/Edit.png')} style={styles.editAddressImg} />
//           <Text style={styles.editAddressText}>
//             Edit Address
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.editAddress}> 
//           <Image source={require('../../constants/img/Note.png')} style={styles.editAddressImg} />
//             <Text style={styles.editAddressText}>
//               Add note
//             </Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.line}></View>

//       <View style={{display: 'flex', flexDirection: 'row', marginTop: 16, alignItems: 'center', marginHorizontal: 24}}>
//         <Image source={require('../../constants/img/Product-2.png')} style={{width: 54, height: 54, borderRadius: 8}}/>
//         <View style={{paddingLeft: 16, paddingRight: 44}}>
//           <Text style={styles.productName}>
//             Coffee Mocha
//           </Text>
//           <Text style={styles.productCall}>
//             Deep Foam
//           </Text>
//         </View>
//         <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: 90, height: 24}}>
//           <TouchableOpacity style={styles.productBtn} onPress={() => {handleromoveProduct(); orderPriceRemove()}}>
//             <Ionicons name='remove-outline' size={16}/>
//           </TouchableOpacity>
//           <Text style={styles.productNum}>
//             {productNum}
//           </Text>
//           <TouchableOpacity style={styles.productBtn} onPress={() => {handleAddProduct(); orderPriceAdd()}}>
//             <Ionicons name='add-outline' size={16}/>
//           </TouchableOpacity>
//         </View>
//       </View>

//       <TouchableOpacity style={styles.discount}>
//         <Image source={require('../../constants/img/Discount.png')} style={styles.discountImg}/>
//         <Text style={styles.discountText}>
//           1 Discount is Applies
//         </Text>
//         <Ionicons name='chevron-forward' size={16}/>
//       </TouchableOpacity>

//       <View style={styles.payment}>
//         <Text style={styles.paymentTitle}>
//           Payment Summary
//         </Text>
//         <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
//         <Text style={styles.paymentPrice}>
//           Price
//         </Text>
//         <Text>
//           $ {price}
//         </Text>
//         </View>
//         <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
//           <Text style={styles.paymentDelivery}>
//             Delivery Fee
//           </Text>
//           <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
//             <Text style={styles.paymentDeliveryDiscount}>
//               $ 2.00
//             </Text>
//             <Text style={styles.paymentDeliveryAfterDiscount}>
//               $ 1.00
//             </Text>
//           </View>
//         </View>
//       </View>

//       <View style={{backgroundColor: '#fff', marginTop: 32, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
//         <View style={{height: 39, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 24, marginTop: 16, marginBottom: 8}}>
//           <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
//             <Image source={require('../../constants/img/Wallet.png')} style={{width: 20, height: 20, marginRight:16}}/>
//             <View>
//               <Text style={styles.cash}>
//                 Cash/Wallet
//               </Text>
//               <Text style={styles.total}>
//                 $ {price + 1}
//               </Text>
//             </View>
//           </View>
//           <TouchableOpacity>
//             <Ionicons name='chevron-down' size={24}/>
//           </TouchableOpacity>
//         </View>

//         <View style={{marginHorizontal: 24, marginBottom: 13 }}>
//           <TouchableOpacity style={styles.orderBtn} onPress={handleOrder}>
//             <Text style={styles.orderText}>
//               Order
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   )
// }
// export default Cart

// function Selection({title, onPress, value}) {
//   return (
//     <TouchableOpacity style={[styles.btn, {backgroundColor: value === title ? '#C67C4E' : '#EDEDED', }]} onPress={() => onPress(title)}>
//       <Text style={[styles.btnText, {color: value === title ? '#fff' : '#242424'}]}>
//         {title}
//       </Text>
//     </TouchableOpacity>
//   )
// }

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor: '#F9F2ED',
//     },
//     head:{
//         marginTop: 60,
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingHorizontal: 24,
//     },
//     headText:{
//         color: '#242424',
//         fontSize: 16,
//         fontFamily: 'sora',
//         fontWeight: '600',
//         lineHeight: 19.20,
//     },
//     btn:{ 
//       display: 'flex',
//       borderRadius: 8,
//       backgroundColor: '#C67C4E',
//       width: 153,
//       height: 35,
//       justifyContent: 'center',
//     },
//     btnText:{
//       textAlign: 'center',
//       fontWeight: 400
//     },
//     title:{
//       color: '#242424',
//       fontSize: 16,
//       fontFamily: 'sora',
//       fontWeight: '600',
//       lineHeight: 24,
//       marginTop: 28,
//       paddingHorizontal: 24,
//     },
//     location:{
//       color: '#313131',
//       fontSize: 14,
//       fontFamily: 'sora',
//       fontWeight: '600',
//       lineHeight: 21,
//       marginTop: 16,
//       paddingHorizontal: 24,
//     },
//     address:{
//       color: '#A2A2A2',
//       fontSize: 12,
//       fontFamily: 'sora',
//       fontWeight: '400',
//       lineHeight: 14.40,
//       marginTop: 4,
//       paddingHorizontal: 24,
//     },
//     editAddress:{
//       display: 'flex',
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'center',
//       maxWidth: 120, 
//       height: 26, 
//       borderRadius: 16,
//       borderWidth: 1,
//       borderColor: '#A2A2A2',
//       paddingHorizontal: 12,
//       marginRight: 8,
//     },
//     editAddressText:{
//       color: '#313131',
//       fontSize: 12,
//       fontFamily: 'sora',
//       fontWeight: '400',
//       lineHeight: 14.40,
//     },
//     editAddressImg:{
//       width: 14,
//       height: 14,
//       marginRight: 4
//     },
//     line:{
//       borderBottomWidth: 1,
//       borderBottomColor: '#E3E3E3',
//       marginTop: 16,
//       marginHorizontal: 40
//     },
//     productName:{
//       color: '#242424',
//       fontSize: 16,
//       fontFamily: 'sora',
//       fontWeight: '600',
//       lineHeight: 24,
//       marginBottom: 4,
//     },
//     productCall:{
//       color: '#A2A2A2',
//       fontSize: 12,
//       fontFamily: 'sora',
//       fontWeight: '400',
//       lineHeight: 14.40,
//     },
//     productNum:{
//       color: '#2A2A2A',
//       fontSize: 14,
//       fontFamily: 'sora',
//       fontWeight: '600',
//       lineHeight: 21,
//       paddingHorizontal: 12
//     },
//     productBtn:{
//       width: 24,
//       height: 24,
//       borderRadius: 24,
//       backgroundColor: '#F9F9F9',
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
//     discount:{
//       display: 'flex',
//       width: 300,
//       height: 56,
//       backgroundColor: '#fff',
//       marginTop: 36, 
//       borderRadius: 16,
//       flexDirection: 'row',
//       alignItems: 'center',
//       paddingHorizontal: 16,
//       paddingVertical: 16,
//       marginHorizontal: 24
//     },
//     discountImg:{
//       width: 20,
//       height: 20,
//     },
//     discountText:{
//       color: '#313131',
//       fontSize: 14,
//       fontFamily: 'sora',
//       fontWeight: '600',
//       lineHeight: 21,
//       paddingLeft: 12,
//       paddingRight: 70
//     },
//     payment:{
//       marginTop: 24,
//       marginHorizontal: 24
//     },
//     paymentTitle:{
//       color: '#242424',
//       fontSize: 16,
//       fontFamily: 'sora',
//       fontWeight: '600',
//       lineHeight: 24,
//       marginBottom: 16,
//     },
//     paymentPrice:{
//       color: '#313131',
//       fontSize: 14,
//       fontFamily: 'sora',
//       fontWeight: '400',
//       lineHeight: 21,
//       marginBottom: 8
//     },
//     paymentDelivery:{
//       color: '#313131',
//       fontSize: 14,
//       fontFamily: 'sora',
//       fontWeight: '400',
//       lineHeight: 21,
//     },
//     paymentDeliveryDiscount:{
//       color: '#2A2A2A',
//       fontSize: 14,
//       fontFamily: 'sora',
//       fontWeight: '400',
//       textDecorationLine: 'line-through',
//       lineHeight: 21,
//     },
//     paymentDeliveryAfterDiscount:{
//       color: '#242424',
//       fontSize: 14,
//       fontFamily: 'sora',
//       fontWeight: '600',
//       lineHeight: 21,
//       marginLeft: 8
//     },
//     cash:{
//       color: '#242424',
//       fontSize: 14,
//       fontFamily: 'sora',
//       fontWeight: '600',
//       lineHeight: 16.80,
//       marginBottom: 4,
//     },
//     total:{
//       color: '#C67C4E',
//       fontSize: 12,
//       fontFamily: 'sora',
//       fontWeight: '600',
//       lineHeight: 18,
//     },
//     orderBtn:{
//       backgroundColor: '#C67C4E',
//       width: 320,
//       height: 56,
//       borderRadius: 16,
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
//     orderText:{
//       color: 'white',
//       fontSize: 16,
//       fontFamily: 'sora',
//       fontWeight: '600',
//       lineHeight: 24,
//     }
// })


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const cart = () => {
  return (
    <View>
      <Text>cart</Text>
    </View>
  )
}

export default cart

const styles = StyleSheet.create({})