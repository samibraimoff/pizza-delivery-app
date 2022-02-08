import {
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
} from '../types';

export const addToCart = (pizza, quantity, varient) => async (dispatch) => {
  let cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient,
    quantity,
    prices: pizza.prices,
    price: pizza.prices[0].varient * quantity,
  };

  dispatch({
    type: ADD_TO_CART_REQUEST,
  });

  try {
    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: cartItem,
    });
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAILURE,
      payload: error,
    });
  }
};
