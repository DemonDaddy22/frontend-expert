import React from 'react';
import './App.scss';
import TicTacToe from './components/TicTacToe';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <TicTacToe />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
