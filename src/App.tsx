import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <Navbar />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
