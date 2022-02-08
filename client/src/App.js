import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home/HomePage';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
