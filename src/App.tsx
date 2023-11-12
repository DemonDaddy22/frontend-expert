import React from 'react';
import './App.scss';
import Toasts from './components/Toasts';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <Toasts />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
