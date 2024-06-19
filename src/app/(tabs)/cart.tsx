import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../../actions/cartActions';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = () => {

  const [deliveryFee, setDeliveryFee] = useState(1.00)
  const [deliveryFeeDiscount, setDeliveryFeeDiscount] = useState('$ 2.00')

  let total = 0
  let totalBill = 0
  const items = useSelector((state) => state.cart.items)

  items.forEach(item => (
    total += item.price * item.quantity,
    // totalBill += item.price * item.quantity + deliveryFee
    totalBill += total + deliveryFee
  ))

  const [selection, setSelection] = useState(null)
  const handleSelection = (value) => {
    setSelection(value)
    if(value == 'Delivery'){
      setDeliveryFee(1.00)
      setDeliveryFeeDiscount('$ 2.00')
    } else {
      setDeliveryFee(0.00)
      setDeliveryFeeDiscount('')
    }
  }
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateCartQuantity = (itemId, quantity, price) => {
    dispatch(updateCartQuantity(itemId, quantity, price));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',}}>

      <View style={{marginTop: 10}}>
        <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)} style={styles.btnItem}>
          <Ionicons name='close-outline' size={24} />
        </TouchableOpacity>
      </View>

        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View>
              <Image source={{uri: item.image_url}} style={{width: 80, height: 100}} />
          </View>
          <View>
              <Text style={{maxWidth: 110}}>{item.name}</Text>
              <Text style={{maxWidth: 100}}>${item.price}</Text>
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'flex-end'}}>
          <TouchableOpacity  onPress={() => handleUpdateCartQuantity(item.id, item.quantity - 1, item.price)} style={styles.btnItem} >
            <Ionicons name='remove-outline' size={24} />
          </TouchableOpacity>
          <Text style={{paddingHorizontal: 10}}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleUpdateCartQuantity(item.id, item.quantity + 1 , item.price)} style={styles.btnItem}>
            <Ionicons name='add-outline' size={24} />
          </TouchableOpacity>
        </View>
      </View>

      
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#000'} />
      <View style={styles.head}>
        
        <Text style={styles.headText}>
            Order
        </Text>
        
      </View>  
      
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#EDEDED', width: 317, height: 43, alignItems: 'center', marginTop: 26.5, marginHorizontal: 24 }}>
        <Selection 
          title={'Delivery'}
          onPress={handleSelection}
          value={selection}
        />
        <Selection 
          title={'Pick up'}
          onPress={handleSelection}
          value={selection}
        />
      </View>

      <View>
        <Text style={styles.title}>
          Delivery Address
        </Text>
        <Text style={styles.location}>
          Delivery Address
        </Text>
        <Text style={styles.address}>
          Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.
        </Text>
      </View>

      <View style={{marginTop: 16, display: 'flex', flexDirection: 'row', marginLeft: 24}}>
        <TouchableOpacity style={styles.editAddress}>
          <Image source={require('../../constants/img/Edit.png')} style={styles.editAddressImg} />
          <Text style={styles.editAddressText}>
            Edit Address
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editAddress}> 
          <Image source={require('../../constants/img/Note.png')} style={styles.editAddressImg} />
            <Text style={styles.editAddressText}>
              Add note
            </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line}></View>
      <View style={{maxHeight: 135, marginBottom: 5}}>
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      
      <View style={{position: 'absolute', bottom: 0 ,}}>
        <TouchableOpacity style={styles.discount}>
          <Image source={require('../../constants/img/Discount.png')} style={styles.discountImg}/>
          <Text style={styles.discountText}>
            1 Discount is Applies
          </Text>
          <Ionicons name='chevron-forward' size={16}/>
        </TouchableOpacity>

        <View style={styles.payment}>
          <Text style={styles.paymentTitle}>
            Payment Summary
          </Text>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={styles.paymentPrice}>
              Price
            </Text>
            <Text>
              $ {total}
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={styles.paymentDelivery}>
              Delivery Fee
            </Text>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
              <Text style={styles.paymentDeliveryDiscount}>
                {deliveryFeeDiscount}
              </Text>
              <Text style={styles.paymentDeliveryAfterDiscount}>
                $ {deliveryFee}.00
              </Text>
            </View>
          </View>
        </View>

        <View style={{backgroundColor: '#fff', marginTop: 32, borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
          <View style={{height: 39, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 24, marginTop: 16, marginBottom: 8}}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
              <Image source={require('../../constants/img/Wallet.png')} style={{width: 20, height: 20, marginRight:16}}/>
              <View>
                <Text style={styles.cash}>
                  Cash/Wallet
                </Text>
                <Text style={styles.total}>
                  $ {totalBill}
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Ionicons name='chevron-down' size={24}/>
            </TouchableOpacity>
          </View>

          <View style={{marginHorizontal: 24, paddingBottom: 10 }}>
            <TouchableOpacity style={styles.orderBtn} 
              // onPress={handleOrder}
            >
              <Text style={styles.orderText}>
                Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};


export default CartScreen;

function Selection({title, onPress, value}) {
  return (
    <TouchableOpacity style={[styles.btn, {backgroundColor: value === title ? '#C67C4E' : '#EDEDED', }]} onPress={() => onPress(title)}>
      <Text style={[styles.btnText, {color: value === title ? '#fff' : '#242424'}]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#F9F2ED',
  },
  itemContainer: {
    marginHorizontal: 25,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },  
  btnItem:{
    backgroundColor: '#fff', 
    borderRadius: 50
  },
  head:{
      marginTop: 60,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
  },
  headText:{
      color: '#242424',
      fontSize: 16,
      fontFamily: 'sora',
      fontWeight: '600',
      lineHeight: 19.20,
  },
  btn:{ 
    display: 'flex',
    borderRadius: 8,
    backgroundColor: '#C67C4E',
    width: 153,
    height: 35,
    justifyContent: 'center',
  },
  btnText:{
    textAlign: 'center',
    fontWeight: 400,
  },
  title:{
    color: '#242424',
    fontSize: 16,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 24,
    marginTop: 18,
    paddingHorizontal: 24,
  },
  location:{
    color: '#313131',
    fontSize: 14,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 21,
    marginTop: 16,
    paddingHorizontal: 24,
  },
  address:{
    color: '#A2A2A2',
    fontSize: 12,
    fontFamily: 'sora',
    fontWeight: '400',
    lineHeight: 14.40,
    marginTop: 4,
    paddingHorizontal: 24,
  },
  editAddress:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 120, 
    height: 26, 
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#A2A2A2',
    paddingHorizontal: 12,
    marginRight: 8,
  },
  editAddressText:{
    color: '#313131',
    fontSize: 12,
    fontFamily: 'sora',
    fontWeight: '400',
    lineHeight: 14.40,
  },
  editAddressImg:{
    width: 14,
    height: 14,
    marginRight: 4
  },
  line:{
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E3',
    marginTop: 16,
    marginHorizontal: 40
  },
  productName:{
    color: '#242424',
    fontSize: 16,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 24,
    marginBottom: 4,
  },
  productCall:{
    color: '#A2A2A2',
    fontSize: 12,
    fontFamily: 'sora',
    fontWeight: '400',
    lineHeight: 14.40,
  },
  productNum:{
    color: '#2A2A2A',
    fontSize: 14,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 21,
    paddingHorizontal: 12
  },
  productBtn:{
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  discount:{
    display: 'flex',
    width: 300,
    height: 56,
    backgroundColor: '#fff',
    marginTop: 26, 
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginHorizontal: 24
  },
  discountImg:{
    width: 20,
    height: 20,
  },
  discountText:{
    color: '#313131',
    fontSize: 14,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 21,
    paddingLeft: 12,
    paddingRight: 70
  },
  payment:{
    marginTop: 24,
    marginHorizontal: 24
  },
  paymentTitle:{
    color: '#242424',
    fontSize: 16,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 24,
    marginBottom: 16,
  },
  paymentPrice:{
    color: '#313131',
    fontSize: 14,
    fontFamily: 'sora',
    fontWeight: '400',
    lineHeight: 21,
    marginBottom: 8
  },
  paymentDelivery:{
    color: '#313131',
    fontSize: 14,
    fontFamily: 'sora',
    fontWeight: '400',
    lineHeight: 21,
  },
  paymentDeliveryDiscount:{
    color: '#2A2A2A',
    fontSize: 14,
    fontFamily: 'sora',
    fontWeight: '400',
    textDecorationLine: 'line-through',
    lineHeight: 21,
  },
  paymentDeliveryAfterDiscount:{
    color: '#242424',
    fontSize: 14,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 21,
    marginLeft: 8
  },
  cash:{
    color: '#242424',
    fontSize: 14,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 16.80,
    marginBottom: 4,
  },
  total:{
    color: '#C67C4E',
    fontSize: 12,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 18,
  },
  orderBtn:{
    backgroundColor: '#C67C4E',
    width: 320,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  orderText:{
    color: 'white',
    fontSize: 16,
    fontFamily: 'sora',
    fontWeight: '600',
    lineHeight: 24,
  }
})