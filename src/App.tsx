import React from 'react';
import './App.scss';
import ThisBinding from './components/ThisBinding';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <ThisBinding />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
