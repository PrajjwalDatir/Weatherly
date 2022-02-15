import React from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import QuickWeather from './components/QuickWeather';

// Weather App init
function App() {
  return (
    <>
      <Header></Header>
      <QuickWeather></QuickWeather>
    </>
  );
}

export default App;
