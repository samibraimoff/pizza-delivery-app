import { combineReducers } from 'redux';

import { pizzaReducer } from './pizza.reducer';
import { cartReducer } from './cart.reducer';

const reducers = combineReducers({
  pizzas: pizzaReducer,
  cart: cartReducer,
});

export default reducers;
