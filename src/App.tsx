import React from 'react';
import './App.scss';
import Flatten from './components/Flatten';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <Flatten />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
