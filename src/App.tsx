import React from 'react';
import './App.scss';
import Debounce from './components/Debounce';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <Debounce />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
