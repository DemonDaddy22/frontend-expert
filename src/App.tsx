import React from 'react';
import './App.scss';
import TipCalculator from './components/TipCalculator';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <TipCalculator />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
