import React from 'react';
import './App.scss';
import RainbowCircles from './components/RainbowCircles';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <RainbowCircles />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
