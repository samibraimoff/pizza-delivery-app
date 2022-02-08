import axios from 'axios';

import {
  GET_PIZZAS_FAILURE,
  GET_PIZZAS_SUCCESS,
  GET_PIZZAS_REQUEST,
} from '../types';

export const getAllPizzas = () => async (dispatch) => {
  dispatch({
    type: GET_PIZZAS_REQUEST,
  });

  try {
    const response = await axios.get('/api/getallpizzas');
    dispatch({
      type: GET_PIZZAS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PIZZAS_FAILURE,
      payload: error,
    });
  }
};
