import React from 'react';
import './App.scss';
import UseLocalStorage from './components/UseLocalStorage';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <UseLocalStorage />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
