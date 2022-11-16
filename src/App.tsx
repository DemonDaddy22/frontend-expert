import React from 'react';
import './App.scss';
import Memoize from './components/Memoize';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <Memoize />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
