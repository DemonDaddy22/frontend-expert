import React from 'react';
import './App.scss';
import Curry from './components/Curry';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <Curry />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
