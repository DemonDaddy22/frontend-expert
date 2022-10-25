import React from 'react';
import './App.scss';
import RobotEmoji from './components/RobotEmoji';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <RobotEmoji />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
