import {
  GET_PIZZAS_FAILURE,
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
} from '../types';

const initialState = {
  list: [],
  item: null,
  loading: false,
  error: null,
};

export const pizzaReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PIZZAS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_PIZZAS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: payload,
      };

    case GET_PIZZAS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
