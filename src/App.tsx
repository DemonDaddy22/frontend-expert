import React from 'react';
import './App.scss';
import TrendingStocks from './components/TrendingStocks';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <TrendingStocks />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
