import React from 'react';
import './App.scss';
import ItemCart from './components/ItemCart';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <ItemCart />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
