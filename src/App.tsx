import React from 'react';
import './App.scss';
import TestingFramework from './components/TestingFramework';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <TestingFramework />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
