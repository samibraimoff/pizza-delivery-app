import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css';

import Pizza from '../../components/pizza/Pizza';

import { getAllPizzas } from '../../redux/actions/pizza.actions';

const HomePage = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.pizzas);

  const loadPizzas = () => {
    dispatch(getAllPizzas());
  };

  useEffect(() => {
    loadPizzas();
  }, []);

  return (
    <div className='home'>
      <h1>Choose your today's pizza...</h1>
      <div className='home-row'>
        {loading ? (
          <Fragment>
            <h1>Loading...</h1>
          </Fragment>
        ) : error ? (
          <Fragment>
            <h1>Something went wrong, please try again.</h1>
          </Fragment>
        ) : (
          // list.length > 0 &&
          // list !== null &&
          list.map((pizza) => {
            return (
              <div className='home-col' key={pizza._id}>
                <Pizza pizza={pizza} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default HomePage;
