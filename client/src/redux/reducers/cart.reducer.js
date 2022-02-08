import {
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
} from '../types';

const initialState = {
  cart: [],
  loading: false,
  error: null,
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cart: [...state.cart, payload],
      };

    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
