import React from 'react';
import './App.scss';
import StopWatch from './components/StopWatch';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <StopWatch />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
