import React from 'react';
import './App.scss';
import ArrayMethods from './components/ArrayMethods';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <ArrayMethods />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
