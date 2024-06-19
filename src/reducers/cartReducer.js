import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../actions/cartActions';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  const newItem = action.payload
  switch (action.type) {
    case ADD_TO_CART:
      const exitingITem = state.items.find((item) => item.id ===  newItem.id)
      if(exitingITem) {
        exitingITem.quantity++
        exitingITem.price += newItem.price
      }
      else{
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    case REMOVE_FROM_CART:
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
        };
    case UPDATE_CART_QUANTITY:
      const quantity = action.payload.quantity
      const price = action.payload.price
      if(quantity === 0){
        return {
         ...state,
          items: state.items.filter(item => item.id!== action.payload.itemId),
        };
      } 
      
      return {
        ...state,
        items: state.items.map(item => 
          item.id === action.payload.itemId 
          ? { ...item, quantity: action.payload.quantity, price: action.payload.price} 
          : item,
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
