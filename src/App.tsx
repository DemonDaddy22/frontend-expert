import React from 'react';
import './App.scss';
import AlgoExpertProducts from './components/AlgoExpertProducts';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <AlgoExpertProducts />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
