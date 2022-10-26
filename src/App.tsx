import React from 'react';
import './App.scss';
import AlgoExpertLogo from './components/AlgoExpertLogo';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <AlgoExpertLogo />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
