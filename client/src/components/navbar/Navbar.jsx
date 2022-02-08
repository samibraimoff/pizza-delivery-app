import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className='navLeft'>
        <div className='navLogo'>
          <FaPizzaSlice className='logo' />
          <span>Happy slice.</span>
        </div>
      </div>

      <div className='navRight'>
        <ul>
          <li>Login</li>
          <li>
            Cart - <span>{cart.length}</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
