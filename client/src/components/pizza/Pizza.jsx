import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Pizza.css';
import ModalComponent from '../modal/ModalComponent';
import { addToCart } from '../../redux/actions/cart.actions';

const Pizza = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('small');

  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(pizza, quantity, varient));
  };

  return (
    <div className='pizza'>
      <ModalComponent show={show} setShow={setShow} pizza={pizza} />
      <h2 className='pizza-title'>{pizza.name}</h2>
      <img
        src={pizza.image}
        alt={pizza.name}
        className='pizza-image'
        onClick={() => setShow(true)}
      />

      <div className='pizza-details'>
        <div className='pizza-variant'>
          <p>Variant:</p>
          <select value={varient} onChange={(e) => setVarient(e.target.value)}>
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className='pizza-quantity'>
          <p>Quantity:</p>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((obj, index) => {
              return <option value={index + 1}>{index + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className='pizza-actions'>
        <div className='pizza-price'>
          <h2>
            Price: <span>{pizza.prices[0][varient] * quantity}</span>
          </h2>
        </div>
        <div className='pizza-btn' onClick={handleAddToCart}>
          Add to cart
        </div>
      </div>
    </div>
  );
};

export default Pizza;
