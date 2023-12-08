import React from 'react';
import './App.scss';
import Wordle from './components/Wordle';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <Wordle />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
