export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';

export const fetchProductRequest = () => ({
  type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (products) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: products,
});

export const fetchProductError = (error) => ({
  type: FETCH_PRODUCT_ERROR,
  payload: error,
});

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchProductRequest());
        try{
            const response = await fetch('http://10.103.7.8:3000/coffee')
            const data = await response.json()
            dispatch(fetchProductSuccess(data))
        } catch(error){
            dispatch(fetchProductError(error.message))
        }
    }
}