import React from 'react';
import './App.scss';
import Promises from './components/Promises';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <Promises />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
