import React from 'react';
import './App.scss';
import Sudoku from './components/Sudoku';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <Sudoku />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
