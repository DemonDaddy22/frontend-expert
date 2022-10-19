import React from 'react';
import './App.scss';
import PigEmoji from './components/PigEmoji';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <PigEmoji />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
