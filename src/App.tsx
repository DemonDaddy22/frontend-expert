import React from 'react';
import './App.scss';
import CryptoPrices from './components/CryptoPrices';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <CryptoPrices />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
