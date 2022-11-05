import React from 'react';
import './App.scss';
import Throttle from './components/Throttle';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <Throttle />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
