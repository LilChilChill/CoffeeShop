import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR } from "../actions/productActions";

const initialState = {
    loading: false,
    products: [],
    error: '',
}

const productReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
               ...state,
                loading: true
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
               ...state,
                loading: false,
                products: action.payload
            }
        case FETCH_PRODUCT_ERROR:
            return {
               ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
    return state;
}

export default productReducer;