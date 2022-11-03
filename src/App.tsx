import React from 'react';
import './App.scss';
import Promisify from './components/Promisify';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <Promisify />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
